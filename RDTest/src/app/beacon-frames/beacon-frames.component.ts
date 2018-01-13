import { Component, OnInit } from '@angular/core';
import { BeaconFrame } from '../beacon-frames/beacon-frames';
import { BeaconFrames } from '../beacon-frames/mock-beacon-frames'

@Component({
  selector: 'app-beacon-frames',
  templateUrl: './beacon-frames.component.html',
  styleUrls: ['./beacon-frames.component.css']
})
export class BeaconFramesComponent implements OnInit {

  beaconFrames = BeaconFrames;

  constructor() { }

  ngOnInit() {
  }

}
