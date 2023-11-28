import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  form:FormGroup;
  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      category:[null,[Validators.required,Validators.minLength(15)]],
      description:[null,[Validators.required,Validators.minLength(10),Validators.maxLength(200)]],
      subcategory:[null,[Validators.required,Validators.minLength(10)]],
      state:['active',[Validators.required,Validators.minLength(10)]],
      in_charge:[null,[Validators.required,Validators.minLength(5),Validators.minLength(25)]]

    });
    this.form.controls['state'].disable();
    this.form.controls['description'].enable();
    console.log(this.form.controls['state'].enabled);
    console.log(this.form.controls['description'].enabled);
  }
}
