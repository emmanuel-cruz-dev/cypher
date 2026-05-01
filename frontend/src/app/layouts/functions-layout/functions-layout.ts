import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

interface FunctionRoute {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-functions-layout',
  imports: [RouterModule, MatSidenavModule, MatListModule, MatIconModule, MatDividerModule],
  templateUrl: './functions-layout.html',
})
export class FunctionsLayout {
  readonly routes: FunctionRoute[] = [
    { label: 'Generador de contraseñas', route: '/functions/password-generator', icon: 'password' },
    {
      label: 'Análisis de fuerza',
      route: '/functions/password-strength-analysis',
      icon: 'health_and_safety',
    },
    { label: 'Frases de contraseña', route: '/functions/passphrase-generator', icon: 'key' },
    { label: 'Nombres de usuario', route: '/functions/username-generator', icon: 'badge' },
  ];
}
