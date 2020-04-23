import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-persona',
  templateUrl: './user-persona.component.html',
  styleUrls: ['./user-persona.component.css']
})
export class UserPersonaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  addPersona(frm){
  	console.log("Answer1 :- "+frm.value.first1);
  	console.log("Answer2 :- "+frm.value.second1);
  	console.log("Answer3 :- "+frm.value.third1);
  }

}
