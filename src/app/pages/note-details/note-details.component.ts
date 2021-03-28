import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/models/notes.model';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  public form: FormGroup;
  public notes: Note[] = [];


  constructor(private fb: FormBuilder) {
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

}
