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
      hoverClass: 'hover:text-blue-600 dark:hover:text-blue-600',
    },
    {
      labelKey: 'Instagram',
      route: 'https://www.instagram.com/',
      icon: 'instagram',
      hoverClass: 'hover:text-pink-600 dark:hover:text-pink-600',
    },
    {
      labelKey: 'TikTok',
      route: 'https://www.tiktok.com/',
      icon: 'tiktok',
      hoverClass: 'hover:text-black dark:hover:text-white',
    },
    {
      labelKey: 'X',
      route: 'https://www.x.com/',
      icon: 'x',
      hoverClass: 'hover:text-black dark:hover:text-white',
    },
    {
      labelKey: 'YouTube',
      route: 'https://www.youtube.com/',
      icon: 'youtube',
      hoverClass: 'hover:text-[#FF0000] dark:hover:text-[#FF0000]',
    },
  ];
}
