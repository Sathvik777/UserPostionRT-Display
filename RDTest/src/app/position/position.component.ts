import { Component, OnInit } from '@angular/core';
import { Position } from '../position/position';
import { ApiManagerService } from '../api-manager.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  position : Position;

  constructor(private apiManagerService: ApiManagerService) {
    
   }

  ngOnInit() {
    this.getPosition();
  }

  getPosition(): void {
    this.position = this.apiManagerService.getPosition();
  }

}
