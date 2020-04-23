import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  typeSelected1: String = "Two Wheeler";

  constructor() { }

  ngOnInit() {
    
  }
  
  addVehicle(frm){
  	console.log("Vehicle added successfully....Type = "+frm.value.type1+", Number = "+frm.value.number2);
  }

}
