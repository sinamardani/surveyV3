import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../assets/theme/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormGroup,
  FormBuilder,
  FormControl,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'app-reportdesign',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, CommonModule],
  templateUrl: './reportdesign.component.html',
  styleUrl: './reportdesign.component.scss',
})
export class ReportdesignComponent implements OnInit {
  forms: FormGroup;
  ngOnInit(): void {
    this.forms = new FormGroup({
      levelForms: new FormArray([]),
    });
  }
  OnFormSubmit() {}

  AddLevel(): void {
    const formGroupLevel = new FormGroup({
      levels: new FormControl(null),
    });
    (<FormArray>this.forms.get('levelForms')).push(formGroupLevel);
  }
  RemoveLevel(index: number) {
    const levels = <FormArray>this.forms.get('levelForms');
    levels.removeAt(index);
  }

  AddItem() {}

  RemoveItem() {}
}
