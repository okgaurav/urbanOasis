import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatRippleModule } from '@angular/material';
const modules:any =[
  CommonModule,
  MatCardModule,
  MatButtonModule,
  MatRippleModule

];

@NgModule({
  imports: [modules],
  exports: [modules]
})
export class MaterialModule { }
