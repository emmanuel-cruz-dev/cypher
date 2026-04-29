import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-social-links-item',
  imports: [MatIconModule, MatTooltipModule],
  templateUrl: './social-links-item.html',
})
export class SocialLinksItem {
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
}
