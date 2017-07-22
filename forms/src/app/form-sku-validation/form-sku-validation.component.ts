import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms'

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return { invalidSku: true }
  }
}

@Component({
  selector: 'app-form-sku-validation',
  templateUrl: './form-sku-validation.component.html',
  styleUrls: ['./form-sku-validation.component.css']
})
export class FormSkuValidationComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder, fb2: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
        Validators.required,
        skuValidator
      ])]
    })

    this.sku = this.myForm.controls['sku'];

  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('myForm.valid: ', this.myForm.valid)
    console.log('Datos del formulario: ', form);
  }

}

