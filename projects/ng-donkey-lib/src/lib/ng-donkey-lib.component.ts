import { Component, ElementRef, Input, OnChanges, OnDestroy, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'ng-donkey-lib',
  template: ``,
  styles: [':host { display: block; position: relative; }']
})
export class NgDonkeyLibComponent implements OnChanges, OnDestroy {
  @Input() clipId: string = '';
  @Input() baseUrl = 'api.donkeyclip.com';
  @Input() branch?: string;
  @Input() width?: string;
  @Input() height?: string;
  @Input() preview = false;
  @Input() showVolume = false;
  @Input() showIndicator = false;
  @Input() controls = false;
  @Input() autoplay = false;
  @Input() scaleToFit = false;
  @Input() loop = false;
  @Input() pointerEvents = false;
  @Input() muted = false;
  @Input() theme?: string;
  @Input() speed?: number;
  @Input() volume?: number;
  @Input() params: any;
  @Input() isInteractive = false;

  @ViewChild('container') container?: ElementRef

  private _scriptElement: HTMLScriptElement;
  private _initiated = false;

  constructor(
    private _renderer2: Renderer2, 
    private element: ElementRef
  ) {
    this._scriptElement = this._renderer2.createElement('script');
    this._renderer2.appendChild(this.element.nativeElement, this._scriptElement);
  }

  ngOnDestroy() {
    // Eliminate script upon destroy
    this._renderer2.removeChild(this.element.nativeElement, this._scriptElement);
  }

  public ngOnChanges() {
    this.updateScript();
  }

  public updateScript() {
    if(!this.clipId) {
      throw new Error('Clip id is missing')
    }

    // Only interactive mode should watch for Input changes
    if(!this.isInteractive && this._initiated){
      return;
    }

    // Evaluate boolean attributes
    this.evaluateAttribute(this.preview,'data-preview');
    this.evaluateAttribute(this.showVolume,'data-show-volume');
    this.evaluateAttribute(this.showIndicator,'data-show-indicator');
    this.evaluateAttribute(this.controls,'data-controls');
    this.evaluateAttribute(this.autoplay,'data-autoplay');
    this.evaluateAttribute(this.scaleToFit,'data-scale-to-fit');
    this.evaluateAttribute(this.loop,'data-loop');
    this.evaluateAttribute(this.pointerEvents,'data-pointer-events');
    this.evaluateAttribute(this.muted,'data-muted');

    //Evaluate string attributes
    this.evaluateAttribute(this.width,'data-width');
    this.evaluateAttribute(this.height,'data-height');
    this.evaluateAttribute(this.theme,'data-theme');
    this.evaluateAttribute(this.speed,'data-speed');
    this.evaluateAttribute(this.volume,'data-volume');
    this.evaluateAttribute(this.params,'data-params');

    this._scriptElement.src =`https://${this.baseUrl}/embed${this.branch ? '/'+this.branch:''}/${this.clipId}`
    this._initiated = true;
  }

  private evaluateAttribute(attrValue: boolean|string|number|undefined, attr: string) {
    if(attrValue) {
      this._scriptElement.setAttribute(attr, typeof attrValue === 'boolean' ? '' : attrValue as string);
    } else {
      this._scriptElement.removeAttribute(attr);
    }
  }
}
