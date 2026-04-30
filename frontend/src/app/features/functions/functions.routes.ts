import { Routes } from '@angular/router';

import { Functions } from './pages/functions';
import { PasswordGenerator } from './pages/password-generator/password-generator';
import { PasswordStrengthAnalysis } from './pages/password-strength-analysis/password-strength-analysis';
import { PassphraseGenerator } from './pages/passphrase-generator/passphrase-generator';
import { UsernameGenerator } from './pages/username-generator/username-generator';

export const FUNCTIONS_ROUTES: Routes = [
  {
    path: '',
    component: Functions,
    title: 'Funciones',
  },
  {
    path: 'password-generator',
    component: PasswordGenerator,
    title: 'Generador de contraseñas',
  },
  {
    path: 'password-strength-analysis',
    component: PasswordStrengthAnalysis,
    title: 'Análisis de fuerza de contraseña',
  },
  {
    path: 'passphrase-generator',
    component: PassphraseGenerator,
    title: 'Generador de frases de contraseña',
  },
  {
    path: 'username-generator',
    component: UsernameGenerator,
    title: 'Generador de nombres de usuario',
  },
];
