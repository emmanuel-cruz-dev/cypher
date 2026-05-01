import { Component } from '@angular/core';

import { FunctionsHero, FunctionsHeroData } from '../../components/functions-hero/functions-hero';

@Component({
  selector: 'app-username-generator',
  imports: [FunctionsHero],
  templateUrl: './username-generator.html',
})
export class UsernameGenerator {
  heroData: FunctionsHeroData = {
    i18nPrefix: 'functions.usernameGenerator',
    imageSrc: 'assets/images/functions/username-generator.avif',
    imageAlt: 'Username generator tool preview',
    accentClass: 'text-violet-500',
  };
}
