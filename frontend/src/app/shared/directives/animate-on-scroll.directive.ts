import { Directive, ElementRef, inject, input, OnInit } from '@angular/core';
import { inView, animate } from 'motion';

@Directive({
  selector: '[appAnimateOnScroll]',
})
export class AnimateOnScroll implements OnInit {
  private el = inject(ElementRef);

  from = input<object>({ opacity: 0, y: 20 });
  to = input<object>({ opacity: 1, y: 0 });
  duration = input<number>(0.6);
  delay = input<number>(0);
  once = input<boolean>(true);

  ngOnInit() {
    const element = this.el.nativeElement;

    inView(element, () => {
      animate(element, this.to(), {
        duration: this.duration(),
        delay: this.delay(),
      });
    });

    animate(element, this.from(), { duration: 0 });
  }
}
