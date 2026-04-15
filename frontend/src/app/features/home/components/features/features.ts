import { Component } from '@angular/core';
import { NgmMotionDirective } from '@scripttype/ng-motion';
import { TranslatePipe } from '@ngx-translate/core';

import { FeaturesCard } from '../features-card/features-card';

@Component({
  selector: 'app-features',
  imports: [NgmMotionDirective, TranslatePipe, FeaturesCard],
  templateUrl: './features.html',
})
export class Features {
  features = [
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
