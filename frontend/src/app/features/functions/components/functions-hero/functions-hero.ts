import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { NgmMotionDirective } from '@scripttype/ng-motion';

export interface FunctionsHeroData {
  i18nPrefix: string;
  imageSrc: string;
  imageAlt: string;
  accentClass?: string;
  imageWidth?: number;
  imageHeight?: number;
}

@Component({
  selector: 'app-functions-hero',
  imports: [NgClass, TranslatePipe, NgmMotionDirective],
  templateUrl: './functions-hero.html',
})
export class FunctionsHero {
  @Input({ required: true }) data!: FunctionsHeroData;

  get accent(): string {
    return this.data.accentClass ?? 'text-violet-500';
  }

  get prefix(): string {
    return this.data.i18nPrefix;
  }
}
