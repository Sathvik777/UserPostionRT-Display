import { Component, OnInit } from '@angular/core';
import { Position } from '../position/position';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  position : Position = {
    id: "12000000000256d9",
    lattitude: 21,
    longitude: 22
  };

  constructor() { }

  ngOnInit() {
  }

}
