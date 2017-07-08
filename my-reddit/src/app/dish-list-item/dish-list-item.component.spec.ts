import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishListItemComponent } from './dish-list-item.component';

describe('DishListItemComponent', () => {
  let component: DishListItemComponent;
  let fixture: ComponentFixture<DishListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
