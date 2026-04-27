import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Feature {
  key: string;
}

@Component({
  selector: 'app-mission-item',
  imports: [TranslatePipe],
  templateUrl: './mission-item.html',
})
export class MissionItem {
  @Input() feature!: Feature;
}
