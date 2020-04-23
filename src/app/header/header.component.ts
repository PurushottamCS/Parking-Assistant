import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit() {
  }

  myFunction1(): void{
   
    this._router.navigate(['Book']);
  }
  myFunction2(): void{
   
    this._router.navigate(['WorkBench']);
  }
}
