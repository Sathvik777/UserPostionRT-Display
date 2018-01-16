import { Component, OnInit } from '@angular/core';
import { BeaconFrame } from '../beacon-frames/beacon-frames';
import { BeaconFrames } from '../services/mock-beacon-frames';
import { BeaconFramesService } from '../services/beacon-frames.service';



@Component({
  selector: 'app-beacon-frames',
  templateUrl: './beacon-frames.component.html',
  styleUrls: ['./beacon-frames.component.css']
})
export class BeaconFramesComponent implements OnInit {

  beacons = BeaconFrames;

  constructor(private beaconFramesService:BeaconFramesService) { }

  ngOnInit() {
    this.beaconFramesService.beaconFramesNewCast.subscribe(newBeacons => {this.beacons = newBeacons});
  }

}
