import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FoodPlacesService} from '../../services/food-places.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {CategoriesService} from '../../services/categories.service';


@Component({
  selector: 'app-add-foodplace',
  templateUrl: './add-foodplace.component.html',
  styleUrls: ['./add-foodplace.component.css']
})
export class AddFoodplaceComponent implements OnInit {

  @Output() foodPlaceAdder = new EventEmitter();
  categories: { id: number, name: string}[];

  constructor(private modalService: NgbModal,
              private foodPlacesService: FoodPlacesService,
              private categoriesService: CategoriesService) {
  }


  open(tpl) {
    this.modalService.open(tpl);
  }

  addFoodPlace(form: NgForm) {
    if (form.valid) {
      this.foodPlaceAdder.emit(form.value);
      this.modalService.dismissAll();
    } else {
      console.warn('Form invalid');
    }
  }

  private fetchCategories() {
    this.categoriesService.fetch().subscribe((resp: any) => {
      this.categories = resp;
    });
  }

  ngOnInit(): void {
    this.fetchCategories();
  }

}
