import { Directive, Input, OnInit, HostListener, Renderer2, ElementRef} from '@angular/core';


@Directive({
	selector: '[appCounting]'
})
export class CountingDirective implements OnInit {

	scrolledYet : boolean = false;
	@Input() count: number = 0 ;
	@Input() set appCounting(count: number){
		this.count = count;
	}

	startTimeout(count: number, el: HTMLElement ){
		var i = 0;
	    var interval = setInterval(function(){ 
	    	if (i >= count ) clearInterval(interval);
	   		el.innerHTML = '<span>'+ i +  ' + ' + '</span>';
	    	i++;
		}, 50);

	}
	
	@HostListener('window:scroll', ['$event']) onScroll($event){

		if(this.scrolledYet) return;
		else if(this.elRef.nativeElement.classList.length != 0){ //activate counting when activate class is added to th el
				this.scrolledYet = true;
				this.startTimeout(this.count, this.elRef.nativeElement);
			
		}
	}

	constructor(private renderer: Renderer2, private elRef: ElementRef){
	}

	ngOnInit(){
		// initializing count values with 0
		var span = this.renderer.createElement('span');
		var text= this.renderer.createText(String(0));
		this.renderer.appendChild(span, text);
		this.renderer.appendChild(this.elRef.nativeElement, span);
	}
	   
}