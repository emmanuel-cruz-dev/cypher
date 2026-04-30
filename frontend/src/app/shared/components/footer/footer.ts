import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { SocialLinksItem } from '../social-links-item/social-links-item';

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
  imports: [RouterLink, TranslatePipe, SocialLinksItem],
  templateUrl: './footer.html',
})
export class Footer {
  readonly columns: FooterColumn[] = [
    {
      titleKey: 'shared.footer.columns.platform.title',
      links: [
        { labelKey: 'shared.footer.columns.platform.home', route: '/' },
        { labelKey: 'shared.footer.columns.platform.functions', route: '/functions' },
        { labelKey: 'shared.footer.columns.platform.security', route: '/security' },
      ],
    },
    {
      titleKey: 'shared.footer.columns.help.title',
      links: [
        { labelKey: 'shared.footer.columns.help.howItWorks', route: '/how-it-works' },
        { labelKey: 'shared.footer.columns.help.about', route: '/about' },
        { labelKey: 'shared.footer.columns.help.contact', route: '/contact' },
      ],
    },
    {
      titleKey: 'shared.footer.columns.legal.title',
      links: [
        { labelKey: 'shared.footer.columns.legal.terms', route: '/legal/terms' },
        { labelKey: 'shared.footer.columns.legal.privacy', route: '/legal/privacy' },
        { labelKey: 'shared.footer.columns.legal.cookies', route: '/legal/cookies' },
      ],
    },
  ];
}
