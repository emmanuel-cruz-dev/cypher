import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgmMotionDirective } from '@scripttype/ng-motion';

import { ContactForm } from '../components/contact-form';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe, NgmMotionDirective, ContactForm],
  templateUrl: './contact.html',
})
export class Contact {}
