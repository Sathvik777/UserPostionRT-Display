import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PositionComponent } from './position/position.component';
import { BeaconFramesComponent } from './beacon-frames/beacon-frames.component';
import { ApiManagerService } from './api-manager.service';


@NgModule({
  declarations: [
    AppComponent,
    PositionComponent,
    BeaconFramesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApiManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
