import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgmMotionDirective } from '@scripttype/ng-motion';

import { ContactForm } from '../components/contact-form/contact-form';
import { ContactInformation } from '../components/contact-information/contact-information';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe, NgmMotionDirective, ContactForm, ContactInformation],
  templateUrl: './contact.html',
})
export class Contact {}
