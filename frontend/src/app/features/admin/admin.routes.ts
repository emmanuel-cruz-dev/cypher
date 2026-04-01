import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { UsersManagement } from './pages/users-management/users-management';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: Dashboard,
    title: 'Dashboard',
  },
  {
    path: 'users',
    component: UsersManagement,
    title: 'Gestión de Usuarios',
  },
];
