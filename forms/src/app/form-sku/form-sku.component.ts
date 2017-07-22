import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
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
      'age': ['35'],
      'name': ['']
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('Datos del formulario: ', form);
  }

}
