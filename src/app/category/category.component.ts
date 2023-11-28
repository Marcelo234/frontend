import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  form:FormGroup;
  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name:[null,[Validators.required,Validators.minLength(10)]],
      age:[0]

    });
    this.form.controls['name'].disable();
    this.form.controls['name'].enable();
    console.log(this.form.controls['name'].enabled);
    console.log(this.form.controls['age'].enabled);
  }
}
