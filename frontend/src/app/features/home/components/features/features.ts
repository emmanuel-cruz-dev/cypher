import { Component } from '@angular/core';
import { NgmMotionDirective } from '@scripttype/ng-motion';
import { TranslatePipe } from '@ngx-translate/core';

interface Feature {
  key: string;
  image: string;
  delay: number;
}

@Component({
  selector: 'app-features',
  imports: [NgmMotionDirective, TranslatePipe],
  templateUrl: './features.html',
})
export class Features {
  features: Feature[] = [
    {
      key: 'automation',
      image: 'src/assets/images/home/feature-automation.png',
      delay: 0,
    },
    {
      key: 'sharing',
      image: 'src/assets/images/home/feature-sharing.png',
      delay: 0.1,
    },
    {
      key: 'strong',
      image: 'src/assets/images/home/feature-strong.png',
      delay: 0.2,
    },
    {
      key: 'access',
      image: 'src/assets/images/home/feature-access.png',
      delay: 0.3,
    },
  ];
}
