import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslatePipe } from '@ngx-translate/core';

interface FooterLink {
  labelKey: string;
  route: string;
}

interface FooterColumn {
  titleKey: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule, MatTooltipModule, TranslatePipe],
  templateUrl: './footer.html',
})
export class Footer {
  readonly socials = [
    {
      labelKey: 'Facebook',
      route: 'https://www.facebook.com/',
      icon: 'facebook',
      color: 'blue-600',
    },
    {
      labelKey: 'Instagram',
      route: 'https://www.instagram.com/',
      icon: 'instagram',
      color: 'pink-600',
    },
    { labelKey: 'TikTok', route: 'https://www.tiktok.com/', icon: 'tiktok', color: 'white' },
    { labelKey: 'X', route: 'https://www.x.com/', icon: 'x', color: 'white' },
    { labelKey: 'YouTube', route: 'https://www.youtube.com/', icon: 'youtube', color: '[#FF0000]' },
  ];

  readonly columns: FooterColumn[] = [
    {
      titleKey: 'footer.columns.platform.title',
      links: [
        { labelKey: 'footer.columns.platform.home', route: '/' },
        { labelKey: 'footer.columns.platform.functions', route: '/functions' },
        { labelKey: 'footer.columns.platform.security', route: '/security' },
      ],
    },
    {
      titleKey: 'footer.columns.help.title',
      links: [
        { labelKey: 'footer.columns.help.howItWorks', route: '/how-it-works' },
        { labelKey: 'footer.columns.help.about', route: '/about' },
        { labelKey: 'footer.columns.help.contact', route: '/contact' },
      ],
    },
    {
      titleKey: 'footer.columns.legal.title',
      links: [
        { labelKey: 'footer.columns.legal.terms', route: '/legal/terms' },
        { labelKey: 'footer.columns.legal.privacy', route: '/legal/privacy' },
        { labelKey: 'footer.columns.legal.cookies', route: '/legal/cookies' },
      ],
    },
  ];
}
