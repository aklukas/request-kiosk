import { NgModule } from '@angular/core';
import {
   MdToolbarModule,
   MdNativeDateModule,
   MdDatepickerModule,
   MdInputModule,
   MdCardModule,
   MdRadioModule,
   MatButtonModule,
   MatCheckboxModule,
   MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdInputModule,
    MdCardModule,
    MdRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  exports: [
    MdToolbarModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdInputModule,
    MdCardModule,
    MdRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class AppMaterialsModule { }
