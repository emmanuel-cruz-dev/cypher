import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

interface FooterColumn {
  title: string;
  links: { label: string; route: string }[];
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule],
  templateUrl: './footer.html',
})
export class Footer {
  readonly columns: FooterColumn[] = [
    {
      title: 'Plataforma',
      links: [
        { label: 'Inicio', route: '/' },
        { label: 'Funciones', route: '/functions' },
        { label: 'Seguridad', route: '/security' },
        { label: 'Sobre el proyecto', route: '/about' },
      ],
    },
    {
      title: 'Ayuda',
      links: [
        { label: 'Contacto', route: '/contact' },
        { label: 'Preguntas frecuentes', route: '/faq' },
        { label: 'Cómo funciona', route: '/how-it-works' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Términos de uso', route: '/legal/terms' },
        { label: 'Política de privacidad', route: '/legal/privacy' },
        { label: 'Política de cookies', route: '/legal/cookies' },
      ],
    },
  ];
}
