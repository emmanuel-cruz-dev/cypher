import { Component, HostListener, signal, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './scroll-to-top.html',
})
export class ScrollToTop {
  readonly visible = signal(false);
  readonly scrollPercent = signal(0);

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercent = (scrollTop / docHeight) * 100;
    this.scrollPercent.set(scrollPercent);

    this.visible.set(scrollTop > 100);
  }

  readonly dashOffset = computed(() => {
    const circumference = 138.23;
    return circumference - (this.scrollPercent() / 100) * circumference;
  });

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
