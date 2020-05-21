import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodplaceComponent } from './add-foodplace.component';

describe('AddFoodplaceComponent', () => {
  let component: AddFoodplaceComponent;
  let fixture: ComponentFixture<AddFoodplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFoodplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
