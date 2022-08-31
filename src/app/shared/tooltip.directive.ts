import { Directive, ElementRef, EmbeddedViewRef, HostListener, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit {
  @Input('appTooltip') template: TemplateRef<unknown> | undefined;

  private viewRef: EmbeddedViewRef<unknown> | undefined;

  constructor(private host: ElementRef, private viewContainer: ViewContainerRef) {}

  @HostListener('mouseover') mouseOver(): void {
    this.viewRef?.rootNodes.forEach((n) => {
      const left = this.host.nativeElement.offsetLeft;
      const bottom = this.host.nativeElement.offsetTop + this.host.nativeElement.offsetHeight;
      n.style.position = 'absolute';
      n.style.top = `${bottom}px`;
      n.style.left = `${left}px`;
      n.style.padding = '6px';
      n.style.border = '1px solid gray';
      n.style['box-shadow'] = '2px 2px gray';
      n.style.backgroundColor = 'white';
      n.style['z-index'] = 999;
    });

    this.setHidden(false);
  }

  @HostListener('mouseout') mouseOut(): void {
    this.setHidden(true);
  }

  setHidden(hidden: boolean): void {
    this.viewRef?.rootNodes.forEach((nativeElement) => {
      nativeElement.hidden = hidden;
    });
  }

  ngOnInit(): void {
    if (!this.template) {
      return;
    }
    this.viewRef = this.viewContainer.createEmbeddedView(this.template);

    this.setHidden(true);
  }
}
