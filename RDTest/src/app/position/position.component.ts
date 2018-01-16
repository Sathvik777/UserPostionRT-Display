import { Component, OnInit } from '@angular/core';
import { Position } from '../position/position';
//import { ApiManagerService } from '../api-manager.service';
import { BeaconPostionService } from '../services/beacon-postion.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  position : Position;

  constructor(private beaconPostionService: BeaconPostionService) {
    
   }

  ngOnInit() {
    this.beaconPostionService.positionOfBeaconCast.subscribe(newPosition => this.position = newPosition);
  }


}
