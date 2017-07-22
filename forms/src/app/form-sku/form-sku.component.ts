import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';


@Component({
  selector: 'app-form-sku',
  templateUrl: './form-sku.component.html',
  styleUrls: ['./form-sku.component.css']
})
export class FormSkuComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'age': ['35', Validators.required],
      'name': ['']
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('Datos del formulario: ', form);
  }

}
