import { Routes } from '@angular/router';

import { Contact } from './pages/contact/contact';

export const contactRoutes: Routes = [
  {
    path: '',
    component: Contact,
    title: 'Contacto',
  },
];
