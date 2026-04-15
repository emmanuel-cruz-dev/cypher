import { Component, Input } from '@angular/core';
import { NgmMotionDirective } from '@scripttype/ng-motion';
import { TranslatePipe } from '@ngx-translate/core';

interface Feature {
  key: string;
  image: string;
  delay: number;
}

@Component({
  selector: 'app-features-card',
  imports: [NgmMotionDirective, TranslatePipe],
  templateUrl: './features-card.html',
})
export class FeaturesCard {
  @Input() feature!: Feature;
}
