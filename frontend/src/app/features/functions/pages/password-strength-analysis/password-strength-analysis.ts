import { Component } from '@angular/core';

import { FunctionsHero, FunctionsHeroData } from '../../components/functions-hero/functions-hero';

@Component({
  selector: 'app-password-strength-analysis',
  imports: [FunctionsHero],
  templateUrl: './password-strength-analysis.html',
})
export class PasswordStrengthAnalysis {
  heroData: FunctionsHeroData = {
    i18nPrefix: 'functions.passwordStrengthAnalysis',
    imageSrc: 'assets/images/functions/password-strength.avif',
    imageAlt: 'Password strength analysis tool preview',
    accentClass: 'text-violet-500',
  };
}
