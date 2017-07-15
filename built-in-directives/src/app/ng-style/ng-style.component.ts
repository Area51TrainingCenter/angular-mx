import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  color: string;
  fontSize: number;

  styles: {
    'background-color': string,
    'border-radius': string,
    'text-align': string,
    border?: string,
    width?: string,
    height?: string
  }


  constructor() {
  }

  ngOnInit() {
    this.fontSize = 16;
    this.color = 'blue';
    this.styles = {
      'background-color': '#ccc',
      'border-radius': '50px',
      'height': '30px',
      'width': '230px',
      'text-align': 'center'
    };
  }

  apply(color: string, fontSize: number): void {
    this.color = color;
    this.fontSize = fontSize;
  }

}
