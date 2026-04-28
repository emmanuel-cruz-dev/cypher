import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';

export interface Testimonial {
  key: string;
  name: string;
  avatar: string;
  rating: number;
}

@Component({
  selector: 'app-testimonial-card',
  imports: [MatIconModule, TranslatePipe],
  templateUrl: './testimonial-card.html',
})
export class TestimonialCard {
  @Input() t!: Testimonial;

  starsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
