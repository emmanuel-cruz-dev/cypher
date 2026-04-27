import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslatePipe } from '@ngx-translate/core';

import { ThemeService, LanguageService } from '../../../core';

interface NavLink {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatTooltipModule,
    TranslatePipe,
  ],
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly themeService = inject(ThemeService);
  readonly langService = inject(LanguageService);
  readonly drawerOpen = signal(false);

  readonly links: NavLink[] = [
    { label: 'shared.nav.home', route: '/', icon: 'home' },
    { label: 'shared.nav.functions', route: '/functions', icon: 'tune' },
    { label: 'shared.nav.security', route: '/security', icon: 'shield' },
    { label: 'shared.nav.howItWorks', route: '/how-it-works', icon: 'build' },
  ];

  toggleDrawer() {
    this.drawerOpen.update((v) => !v);
  }
}
