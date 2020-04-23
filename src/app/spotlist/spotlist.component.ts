import { Component, OnInit } from '@angular/core';
import { SpotList } from '../spotlist';

@Component({
  selector: 'app-spotlist',
  templateUrl: './spotlist.component.html',
  styleUrls: ['./spotlist.component.css']
})
export class SpotlistComponent implements OnInit {

  itemList: SpotList[] = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit() {
  } 
}

const ELEMENT_DATA: SpotList[] = [
{name:"Ganesh Parking Centre",address:"Trimurti chowk,Katraj"},
{name:"Ramesh Parking Centre",address:"Dange chowk,Nigdi"},
{name:"Suresh Parking Centre",address:"Balajinagar"},
];
