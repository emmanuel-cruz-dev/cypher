import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgmMotionDirective } from '@scripttype/ng-motion';
import { TranslatePipe } from '@ngx-translate/core';

import { LanguageService } from '../../../../core';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink, NgmMotionDirective, TranslatePipe],
  templateUrl: './hero-section.html',
})
export class HeroSection {
  readonly langService = inject(LanguageService);
}
