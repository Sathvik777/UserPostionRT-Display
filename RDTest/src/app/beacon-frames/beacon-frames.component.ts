import { Component, OnInit } from '@angular/core';
import { BeaconFrame } from '../beacon-frames/beacon-frames';

@Component({
  selector: 'app-beacon-frames',
  templateUrl: './beacon-frames.component.html',
  styleUrls: ['./beacon-frames.component.css']
})
export class BeaconFramesComponent implements OnInit {

  beaconFrames : BeaconFrame = {
    box : "",
    rssi :  1
  };

  constructor() { }

  ngOnInit() {
  }

}
