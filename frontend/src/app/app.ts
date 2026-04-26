import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { ScrollToTop } from './shared';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScrollToTop],
  templateUrl: './app.html',
})
export class App {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/facebook.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/instagram.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'tiktok',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/tiktok.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'x',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/x.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'youtube',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/youtube.svg')
    );
  }
}
