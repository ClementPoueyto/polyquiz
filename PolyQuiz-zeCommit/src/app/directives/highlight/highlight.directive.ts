import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  public elem: ElementRef;
  constructor(private el: ElementRef) {
    this.elem = this.el;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('orange');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.elem.nativeElement.style.borderColor = color;
  }
}
