import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PositionComponent } from './position/position.component';
import { BeaconFramesComponent } from './beacon-frames/beacon-frames.component';
import { ApiManagerService } from './api-manager.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PositionComponent,
    BeaconFramesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
