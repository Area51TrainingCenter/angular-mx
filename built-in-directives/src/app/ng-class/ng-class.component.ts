import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  isBordered: boolean;
  classesObj: Object;
  classList: string[];

  constructor() { }

  ngOnInit() {
    this.isBordered = false;
    this.classList = ['blue', 'round'];
  }

  toggleBorder() {
    this.isBordered = !this.isBordered;
    this.classesObj = {
      bordered: this.isBordered
    }
  }

}
