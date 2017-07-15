import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  choice: number;

  constructor() { }

  ngOnInit() {
    this.choice = 0;
  }

  nextChoice(): void {
    this.choice += 1;
    if (this.choice > 4) {
      this.choice = 1;
    }
  }

}
