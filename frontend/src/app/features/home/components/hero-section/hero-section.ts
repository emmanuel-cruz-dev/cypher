import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgmMotionDirective } from '@scripttype/ng-motion';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink, NgmMotionDirective],
  templateUrl: './hero-section.html',
})
export class HeroSection {}
