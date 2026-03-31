import { Routes } from '@angular/router';

import { About } from './pages/about/about';

export const aboutRoutes: Routes = [
  {
    path: '',
    component: About,
    title: 'Sobre el proyecto',
  },
];
