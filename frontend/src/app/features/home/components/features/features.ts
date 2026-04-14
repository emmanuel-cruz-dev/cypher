import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { LanguageService } from '../../../../core';

@Component({
  selector: 'app-features',
  imports: [TranslatePipe],
  templateUrl: './features.html',
})
export class Features {
  readonly langService = inject(LanguageService);
}
