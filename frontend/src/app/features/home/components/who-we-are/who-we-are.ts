import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgmMotionDirective } from '@scripttype/ng-motion';

interface Stat {
  key: string;
  value: string;
}

@Component({
  selector: 'app-who-we-are',
  imports: [TranslatePipe, NgmMotionDirective],
  templateUrl: './who-we-are.html',
})
export class WhoWeAre {
  readonly stats: Stat[] = [
    { key: 'positiveReviews', value: '24K+' },
    { key: 'protectedUsers', value: '18M+' },
    { key: 'affiliatedCompanies', value: '21K+' },
  ];
}
