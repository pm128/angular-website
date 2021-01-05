import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
@NgModule({

	imports: [
	    MatIconModule,
    	MatCardModule,
    	MatButtonModule,
    	AnimateOnScrollModule.forRoot(), 
	],
	exports: [
		MatIconModule,
    	MatCardModule,
    	MatButtonModule,
    	AnimateOnScrollModule

	]
})
export class MatModule {

}