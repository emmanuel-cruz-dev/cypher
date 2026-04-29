import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';

import { SocialLinksItem } from '../../../../shared';

interface ContactItem {
  key: string;
  icon: string;
}

@Component({
  selector: 'app-contact-information',
  imports: [MatIconModule, TranslatePipe, SocialLinksItem],
  templateUrl: './contact-information.html',
})
export class ContactInformation {
  readonly contactItems: ContactItem[] = [
    {
      key: 'email',
      icon: 'mail',
    },
    {
      key: 'location',
      icon: 'location_on',
    },
    {
      key: 'responseTime',
      icon: 'schedule',
    },
  ];
}
