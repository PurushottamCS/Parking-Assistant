import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id : string;

  customer = {
    _id : '123',
    name : 'Rohan Suryavanshi',
    address : 'Pune',
    acc_no : '123412341234',
    mob : '9028877711',
    vehicles : ELEMENT_DATA,
  }

  constructor() { }

  ngOnInit() {
  }
}

const ELEMENT_DATA: Vehicle[] = [
{number : 'MH-45 K 6070',type : '2 wheeler'},
{number : 'MH-09 AJ 5862',type : '2 wheeler'},
{number : 'MH-12 KK 7536',type : '2 wheeler'},
{number : 'MH-13 SN 8954',type : '4 wheeler'},
{number : 'MH-12 NS 1904',type : '4 wheeler'},
{number : 'MH-12 AS 8941',type : '4 wheeler'},
];
