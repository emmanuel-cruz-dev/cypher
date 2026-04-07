import { Component } from '@angular/core';

import { AboutUs } from '../components/about-us/about-us';
import { OurTeam } from '../components/our-team/our-team';

@Component({
  selector: 'app-about',
  imports: [AboutUs, OurTeam],
  templateUrl: './about.html',
})
export class About {}
