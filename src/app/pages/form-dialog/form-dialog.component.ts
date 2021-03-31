import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(public dialogRef: MatDialogRef<FormDialogComponent>,
              private fb: FormBuilder) { 
                this.form = this.fb.group({
                  title: ['', Validators.compose([
                    Validators.minLength(3),
                    Validators.maxLength(60),
                    Validators.required
                  ])],
                  body: ['', Validators.compose([
                    Validators.minLength(10),
                    Validators.maxLength(90),
                    Validators.required
                  ])]
                });
              }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
