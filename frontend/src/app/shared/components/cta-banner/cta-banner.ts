import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NgmMotionDirective } from '@scripttype/ng-motion';

export type CtaBannerVariant = 'register' | 'login';

interface CtaBannerConfig {
  buttonRoute: string;
}

const BANNER_CONFIGS: Record<CtaBannerVariant, CtaBannerConfig> = {
  register: {
    buttonRoute: '/auth/register',
  },
  login: {
    buttonRoute: '/auth/login',
  },
};

@Component({
  selector: 'app-cta-banner',
  imports: [RouterLink, TranslatePipe, NgmMotionDirective],
  templateUrl: './cta-banner.html',
})
export class CtaBanner {
  @Input() variant: CtaBannerVariant = 'register';

  get config(): CtaBannerConfig {
    return BANNER_CONFIGS[this.variant];
  }
}
