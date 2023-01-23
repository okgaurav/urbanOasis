import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import {PrimeModule} from './prime.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome/dist';

const modules = [
    CommonModule,
    MaterialModule,
    PrimeModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule
];

const components:any=[];

const declarations:any=[];

@NgModule({
    declarations: [
        components,
        declarations
    ],
    imports: [
        modules
    ],
    exports: [
        components,
        modules
    ]
})
export class BaseModule { }
