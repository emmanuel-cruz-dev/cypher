import { Component } from '@angular/core';

import { HeroSection } from '../components/hero-section/hero-section';
import { Features } from '../components/features/features';
import { WhoWeAre } from '../components/who-we-are/who-we-are';
import { Mission } from '../components/mission/mission';
import { Testimonials } from '../components/testimonials/testimonials';
import { CtaBanner } from '../../../shared/components/cta-banner/cta-banner';

@Component({
  selector: 'app-home',
  imports: [HeroSection, Features, WhoWeAre, Mission, Testimonials, CtaBanner],
  templateUrl: './home.html',
})
export class Home {}
