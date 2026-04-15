import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgmMotionDirective } from '@scripttype/ng-motion';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink, NgmMotionDirective, TranslatePipe],
  templateUrl: './hero-section.html',
})
export class HeroSection {}
