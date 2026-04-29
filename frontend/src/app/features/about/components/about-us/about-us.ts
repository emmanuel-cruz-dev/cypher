import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { NgmMotionDirective } from '@scripttype/ng-motion';

@Component({
  selector: 'app-about-us',
  imports: [TranslatePipe, MatIconModule, NgmMotionDirective],
  templateUrl: './about-us.html',
})
export class AboutUs {
  features = [
    'centralizedCredential',
    'dataInTransit',
    'passwordGenerator',
    'labelsAndCategories',
    'securityAudit',
    'secureAuthentication',
  ];
}
