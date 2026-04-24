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
      image: 'assets/images/home/feature-automation.avif',
      delay: 0,
    },
    {
      key: 'sharing',
      image: 'assets/images/home/feature-sharing.avif',
      delay: 0.1,
    },
    {
      key: 'strong',
      image: 'assets/images/home/feature-strong.avif',
      delay: 0.2,
    },
    {
      key: 'access',
      image: 'assets/images/home/feature-access.avif',
      delay: 0.3,
    },
  ];
}
