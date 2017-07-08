import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dish-list-item',
  templateUrl: './dish-list-item.component.html',
  styleUrls: ['./dish-list-item.component.css']
})
export class DishListItemComponent implements OnInit {

  @Input() myDish: Object;

  constructor() { }

  ngOnInit() {
  }

}
