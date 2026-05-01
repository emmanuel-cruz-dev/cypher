import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgmMotionDirective } from '@scripttype/ng-motion';

import { TestimonialCard, Testimonial } from '../testimonial-card/testimonial-card';

@Component({
  selector: 'app-testimonials',
  imports: [TranslatePipe, NgmMotionDirective, TestimonialCard],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonials implements AfterViewInit {
  @ViewChild('swiperEl') swiperEl!: ElementRef;

  readonly testimonials: Testimonial[] = [
    {
      key: 'laura',
      name: 'Laura Hidalgo',
      avatar: 'assets/images/home/testimony-user1.webp',
      rating: 5,
    },
    {
      key: 'carlos',
      name: 'Carlos Méndez',
      avatar: 'assets/images/home/testimony-user2.webp',
      rating: 5,
    },
    {
      key: 'ana',
      name: 'Ana Rodríguez',
      avatar: 'assets/images/home/testimony-user3.webp',
      rating: 4,
    },
    {
      key: 'carla',
      name: 'Carla Rivas',
      avatar: 'assets/images/home/testimony-user4.webp',
      rating: 5,
    },
    {
      key: 'miguel',
      name: 'Miguel Torres',
      avatar: 'assets/images/home/testimony-user5.webp',
      rating: 4,
    },
  ];

  starsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  ngAfterViewInit(): void {
    const swiperParams = {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      speed: 350,
      fadeEffect: { crossFade: true },
      pagination: {
        clickable: true,
      },
      injectStyles: [
        `
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 20px;
          border-radius: 4px;
          background: #8b5cf6;
        }
        `,
      ],
    };

    Object.assign(this.swiperEl.nativeElement, swiperParams);
    this.swiperEl.nativeElement.initialize();
  }
}
