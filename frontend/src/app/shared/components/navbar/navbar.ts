import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

import { ThemeService } from '../../../core';

interface NavLink {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, MatIconModule, MatButtonModule, MatRippleModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly themeService = inject(ThemeService);
  readonly drawerOpen = signal(false);

  readonly links: NavLink[] = [
    { label: 'Inicio', route: '/', icon: 'home' },
    { label: 'Funciones', route: '/functions', icon: 'tune' },
    { label: 'Seguridad', route: '/security', icon: 'shield' },
    { label: 'Cómo funciona', route: '/how-it-works', icon: 'build' },
    { label: 'Sobre el proyecto', route: '/about', icon: 'info' },
    { label: 'Contacto', route: '/contact', icon: 'mail' },
  ];

  toggleDrawer() {
    this.drawerOpen.update((v) => !v);
  }
}
