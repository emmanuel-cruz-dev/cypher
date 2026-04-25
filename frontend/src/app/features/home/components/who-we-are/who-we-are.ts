import {
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgmMotionDirective } from '@scripttype/ng-motion';

interface Stat {
  key: string;
  target: number;
  suffix: string;
  displayed: number;
}

@Component({
  selector: 'app-who-we-are',
  imports: [TranslatePipe, NgmMotionDirective],
  templateUrl: './who-we-are.html',
})
export class WhoWeAre implements AfterViewInit, OnDestroy {
  @ViewChild('statsSection') statsSection!: ElementRef<HTMLElement>;

  private observer: IntersectionObserver | null = null;
  private hasAnimated = false;
  private readonly cdr = inject(ChangeDetectorRef);

  stats: Stat[] = [
    { key: 'positiveReviews', target: 24, suffix: 'K+', displayed: 0 },
    { key: 'protectedUsers', target: 18, suffix: 'M+', displayed: 0 },
    { key: 'affiliatedCompanies', target: 21, suffix: 'K+', displayed: 0 },
  ];

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          setTimeout(() => this.stats.forEach((s) => this.animateCount(s)), 200);
          this.observer?.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    this.observer.observe(this.statsSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private animateCount(stat: Stat, duration = 1600): void {
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      stat.displayed = Math.round((current / steps) * stat.target);
      if (current >= steps) {
        stat.displayed = stat.target;
        clearInterval(timer);
      }
      this.cdr.markForCheck();
    }, stepTime);
  }
}
