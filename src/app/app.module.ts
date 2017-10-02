import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RequestsService} from './shared/requests.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppMaterialsModule } from './app-materials.module';

import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    RequestListComponent,
    RequestDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpModule,
    AppMaterialsModule
  ],
  providers: [RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
