import { Component, OnInit } from '@angular/core';
import { SpotList } from '../spotlist';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cityList: String[] = ["Pune","Mumbai","Nagar","Nashik","Nanded"];
  citySelected: String = "Pune";

  itemList: SpotList[] = ELEMENT_DATA1;

  constructor() { }

  ngOnInit() {
  }
  
  updateSpotList(ctrl) {
   if(this.cityList[ctrl.selectedIndex] == this.cityList[0])
   	this.itemList = ELEMENT_DATA1;
   else if(this.cityList[ctrl.selectedIndex] == this.cityList[1])
   	this.itemList = ELEMENT_DATA2;
   else if(this.cityList[ctrl.selectedIndex] == this.cityList[2])
   	this.itemList = ELEMENT_DATA3;
   else if(this.cityList[ctrl.selectedIndex] == this.cityList[3])
   	this.itemList = ELEMENT_DATA4;
   else if(this.cityList[ctrl.selectedIndex] == this.cityList[4])
   	this.itemList = ELEMENT_DATA5;
  }
}

const ELEMENT_DATA1: SpotList[] = [
{name:"Ganesh Parking Centre",address:"Trimurti chowk,Katraj"},
{name:"Ramesh Parking Centre",address:"Dange chowk,Nigdi"},
{name:"Suresh Parking Centre",address:"Balajinagar"},
];

const ELEMENT_DATA2: SpotList[] = [
{name:"ABC Parking Centre",address:"Dadar"},
{name:"DEF Parking Centre",address:"Bandra"},
{name:"XYZ Parking Centre",address:"Worli"},
];

const ELEMENT_DATA3: SpotList[] = [
{name:"Mayuresh Parking Centre",address:"Trimurti chowk,Katraj"},
{name:"Tanmay Parking Centre",address:"Dange chowk,Nigdi"},
{name:"Saurabh Parking Centre",address:"Balajinagar"},
];

const ELEMENT_DATA4: SpotList[] = [
{name:"Jayesh Parking Centre",address:"Trimurti chowk,Katraj"},
{name:"Sanket Parking Centre",address:"Dange chowk,Nigdi"},
{name:"Anway Parking Centre",address:"Balajinagar"},
];

const ELEMENT_DATA5: SpotList[] = [
{name:"Pratul Parking Centre",address:"Trimurti chowk,Katraj"},
{name:"Rohan Parking Centre",address:"Dange chowk,Nigdi"},
{name:"Puru Parking Centre",address:"Balajinagar"},
];
