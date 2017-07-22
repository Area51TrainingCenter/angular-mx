import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuValidationComponent } from './form-sku-validation.component';

describe('FormSkuValidationComponent', () => {
  let component: FormSkuValidationComponent;
  let fixture: ComponentFixture<FormSkuValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSkuValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
