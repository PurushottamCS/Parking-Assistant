import { Component, OnInit } from '@angular/core';
import { BookOrderDetails } from '../../app/bookorder'
import { Vehicle } from '../../app/vehicle';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }
  
  id : string;
  spot: BookOrderDetails = ELEMENT_DATA;
  two_wheeler: Vehicle[] = ELEMENT_DATA2;
  four_wheeler: Vehicle[] = ELEMENT_DATA3;
  vehicleSelected1: String = 'MH-45 K 6070';
  vehicleSelected2: String = 'MH-13 SN 8954';

  ngOnInit() {
  }

  bookOrder1(){
  	console.log("Vehicle number "+this.vehicleSelected1+" is booked");
  }
  
  bookOrder2(){
  	console.log("Vehicle number "+this.vehicleSelected2+" is booked");
  }

}

const ELEMENT_DATA: BookOrderDetails = {
    name : 'Ganesh Parking Spot',
    address : 'Trimurti chowk, Katraj',
    rate_per_hour_2 : 100,
    rate_per_hour_4 : 200,
    avl_2 : 24,
    avl_4 : 12,
    cust_id : 123,
    veh_type : '2 wheeler',
    veh_number : 1234,
    time : '"current time"'
};
  
const ELEMENT_DATA2: Vehicle[] = [
{number : 'MH-45 K 6070',type : '2 wheeler'},
{number : 'MH-09 AJ 5862',type : '2 wheeler'},
{number : 'MH-12 KK 7536',type : '2 wheeler'},];

const ELEMENT_DATA3: Vehicle[] = [
{number : 'MH-13 SN 8954',type : '4 wheeler'},
{number : 'MH-12 NS 1904',type : '4 wheeler'},
{number : 'MH-12 AS 8941',type : '4 wheeler'},];
