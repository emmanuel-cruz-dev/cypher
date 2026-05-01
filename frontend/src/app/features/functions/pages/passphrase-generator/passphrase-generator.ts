import { Component } from '@angular/core';

import { FunctionsHero, FunctionsHeroData } from '../../components/functions-hero/functions-hero';

@Component({
  selector: 'app-passphrase-generator',
  imports: [FunctionsHero],
  templateUrl: './passphrase-generator.html',
})
export class PassphraseGenerator {
  heroData: FunctionsHeroData = {
    i18nPrefix: 'functions.passphraseGenerator',
    imageSrc: 'assets/images/functions/passphrase-generator.avif',
    imageAlt: 'Passphrase generator tool preview',
    accentClass: 'text-violet-500',
  };
}
