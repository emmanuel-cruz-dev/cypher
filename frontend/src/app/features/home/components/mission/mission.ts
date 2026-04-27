import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgmMotionDirective } from '@scripttype/ng-motion';

import { MissionItem } from '../mission-item/mission-item';

@Component({
  selector: 'app-mission',
  imports: [TranslatePipe, NgmMotionDirective, MissionItem],
  templateUrl: './mission.html',
})
export class Mission {
  features = [
    { key: 'cyberDefense' },
    { key: 'networkSecurity' },
    { key: 'webProtection' },
    { key: 'accessManagement' },
  ];
}
