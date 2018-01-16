import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PositionComponent } from './position/position.component';
import { BeaconFramesComponent } from './beacon-frames/beacon-frames.component';
import { ApiManagerService } from './api-manager.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthunticationManagerService } from './authuntication-manager.service';
import { BeaconPostionService } from './beacon-postion.service';
import { BeaconFramesService } from './beacon-frames.service';

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
  providers: [ApiManagerService, AuthunticationManagerService, BeaconPostionService, BeaconFramesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
