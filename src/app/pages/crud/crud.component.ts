import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isShown: boolean = true;

toggleShow(){
  this.isShown= ! this.isShown;
}
}
