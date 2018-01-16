import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PositionComponent } from './position/position.component';
import { BeaconFramesComponent } from './beacon-frames/beacon-frames.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthunticationManagerService } from './services/authuntication-manager.service';
import { BeaconPostionService } from './services/beacon-postion.service';
import { BeaconFramesService } from './services/beacon-frames.service';

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
  providers: [ AuthunticationManagerService, BeaconPostionService, BeaconFramesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
