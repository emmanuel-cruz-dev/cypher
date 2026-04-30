import { Component, inject, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TextFieldModule } from '@angular/cdk/text-field';
import { TranslatePipe } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';

import { environment } from '../../../../../environments/environment';

const RATE_LIMIT_KEY = 'contact-form-submissions';
const MAX_SUBMISSIONS_PER_DAY = 3;
const MAX_MESSAGE_LENGTH = 300;

interface RateLimitData {
  count: number;
  date: string;
}

function noOnlyNumbers(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (value && /^\d+$/.test(value.trim())) {
    return { noOnlyNumbers: true };
  }
  return null;
}

function noNumbers(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (value && /\d/.test(value)) {
    return { noNumbers: true };
  }
  return null;
}

@Component({
  selector: 'app-contact-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    TextFieldModule,
    TranslatePipe,
  ],
  templateUrl: './contact-form.html',
})
export class ContactForm {
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);

  readonly isLoading = signal(false);
  readonly formSubmitted = signal(false);
  readonly maxMessageLength = MAX_MESSAGE_LENGTH;

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), noNumbers]],
    email: [
      '',
      [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(254)],
    ],
    subject: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(50), noOnlyNumbers],
    ],
    message: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(MAX_MESSAGE_LENGTH)],
    ],
  });

  get messageCharCount(): number {
    return (this.contactForm.get('message')?.value as string)?.length ?? 0;
  }

  get messageCharsRemaining(): number {
    return MAX_MESSAGE_LENGTH - this.messageCharCount;
  }

  private getTodayString(): string {
    return new Date().toISOString().split('T')[0];
  }

  private getRateLimitData(): RateLimitData {
    try {
      const raw = localStorage.getItem(RATE_LIMIT_KEY);
      if (!raw) return { count: 0, date: this.getTodayString() };
      const data: RateLimitData = JSON.parse(raw);
      return data.date !== this.getTodayString() ? { count: 0, date: this.getTodayString() } : data;
    } catch {
      return { count: 0, date: this.getTodayString() };
    }
  }

  private incrementRateLimitCount(): void {
    const data = this.getRateLimitData();
    localStorage.setItem(
      RATE_LIMIT_KEY,
      JSON.stringify({ count: data.count + 1, date: data.date })
    );
  }

  get remainingSubmissions(): number {
    return Math.max(0, MAX_SUBMISSIONS_PER_DAY - this.getRateLimitData().count);
  }

  get isRateLimited(): boolean {
    return this.getRateLimitData().count >= MAX_SUBMISSIONS_PER_DAY;
  }

  async onSubmit(): Promise<void> {
    this.formSubmitted.set(true);

    if (this.isRateLimited) {
      this.snackBar.open(
        `Límite alcanzado: máximo ${MAX_SUBMISSIONS_PER_DAY} mensajes por día. Volvé mañana.`,
        '✕',
        { duration: 5000, panelClass: ['snack-warn'] }
      );
      return;
    }

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.snackBar.open('Por favor completá todos los campos correctamente.', '✕', {
        duration: 3000,
        panelClass: ['snack-error'],
      });
      return;
    }

    this.isLoading.set(true);

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          from_name: this.contactForm.value.name,
          user_name: this.contactForm.value.name,
          user_email: this.contactForm.value.email,
          subject: this.contactForm.value.subject,
          message: this.contactForm.value.message,
        },
        environment.emailjs.publicKey
      );

      this.incrementRateLimitCount();

      this.snackBar.open('¡Mensaje enviado! Te responderemos a la brevedad.', '✕', {
        duration: 5000,
        panelClass: ['snack-success'],
      });

      this.formSubmitted.set(false);
      this.contactForm.reset();

      Object.values(this.contactForm.controls).forEach((control) => {
        control.setErrors(null);
        control.markAsPristine();
        control.markAsUntouched();
      });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      this.snackBar.open('Hubo un problema al enviar el mensaje. Intentá más tarde.', '✕', {
        duration: 4000,
        panelClass: ['snack-error'],
      });
    } finally {
      this.isLoading.set(false);
    }
  }
}
