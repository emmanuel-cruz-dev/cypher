import { Component } from '@angular/core';

import { FunctionsHero, FunctionsHeroData } from '../../components/functions-hero/functions-hero';
import { CtaBanner } from '../../../../shared';

@Component({
  selector: 'app-password-generator',
  imports: [FunctionsHero, CtaBanner],
  templateUrl: './password-generator.html',
})
export class PasswordGenerator {
  heroData: FunctionsHeroData = {
    i18nPrefix: 'functions.passwordGenerator',
    imageSrc: 'assets/images/functions/password-generator.avif',
    imageAlt: 'Password generator tool preview',
    accentClass: 'text-violet-500',
  };
}
