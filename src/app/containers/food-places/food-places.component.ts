import {Component, OnInit} from '@angular/core';
import {FoodPlacesService} from '../../services/food-places.service';

@Component({
  selector: 'app-food-places',
  templateUrl: './food-places.component.html',
  styleUrls: ['./food-places.component.css']
})
export class FoodPlacesComponent implements OnInit {

  foodplaces: any[];
  config: any[] = [
    {key: 'id', type: 'number'},
    {key: 'name'},
    {key: 'category', type: 'object', variable: 'name'},
    {key: 'rating', type: 'number'},
    {key: 'userRating', type: 'input'},
    {key: 'id', type: 'button', text: 'rate', arg: 'userRating'},
    {key: 'id', type: 'button', text: 'remove'},
  ];

  constructor(
    private foodPlacesService: FoodPlacesService) {
  }

  private fetchItems() {
    this.foodPlacesService.fetch().subscribe((resp: any) => {
      this.foodplaces = resp;
    });
  }

  action({action, id, arg}) {
    switch (action) {
      case 'rate':
        this.foodPlacesService.rate(id, arg).subscribe(resp => {
          this.fetchItems();
        });
        break;

      case 'remove':
        this.foodPlacesService.remove(id).subscribe(resp => {
          this.fetchItems();
        });
        break;

      default:
        break;
    }
  }

  addFoodPlace(item) {
    this.foodPlacesService.add(item).subscribe(resp => {
      this.fetchItems();
    });
  }

  ngOnInit(): void {
    this.fetchItems();
  }

}
