import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight: string = '';
  @Input() defaultColor: string = '';

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor =
      this.appHighlight || this.defaultColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor =
      'yellow' || this.defaultColor;
  }
}
