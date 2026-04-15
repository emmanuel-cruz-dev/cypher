import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';

interface FooterColumn {
  titleKey: string;
  links: { labelKey: string; route: string }[];
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink, MatIconModule, TranslatePipe],
  templateUrl: './footer.html',
})
export class Footer {
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
