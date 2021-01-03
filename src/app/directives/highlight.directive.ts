import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
	selector: '[mycustomdirective]'
})

export class HighlightDirective {

	constructor(public elRef: ElementRef) {}

	@HostListener('mouseenter')onMouseEnter() {
		this.elRef.nativeElement.style.backgroundColor = 'grey';
		this.elRef.nativeElement.style.fontSize = '24px';
	}

	@HostListener('mouseleave')onMouseLeave(){
		this.elRef.nativeElement.style.backgroundColor = 'initial';
		this.elRef.nativeElement.style.fontSize = 'initial';
	}
	
}