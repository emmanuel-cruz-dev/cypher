import { Component } from '@angular/core';

import { ContactForm } from '../components/contact-form';

@Component({
  selector: 'app-contact',
  imports: [ContactForm],
  templateUrl: './contact.html',
})
export class Contact {}
