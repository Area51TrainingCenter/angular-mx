import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  // dishes: string[];
  dishes: object[];

  constructor() {
  }

  ngOnInit() {
    // this.dishes = ['Carapulcra', 'Ceviche', 'Arroz con pollo', 'arroz con mariscos', 'pollo a la brasa'];
    this.dishes = [
      { name: 'Carapulcra', stars: 10 },
      { name: 'Ceviche', stars: 9 },
      { name: 'Arroz con pollo', stars: 8 },
      { name: 'arroz con mariscos', stars: 7 },
      { name: 'Pollo a la brasa', stars: 6 }
    ];
  }

}
