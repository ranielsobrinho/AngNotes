import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private notesService: NotesService,
              private route: ActivatedRoute) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])],
      body: ['', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(300),
        Validators.required
      ])]
    });
   }

  ngOnInit(): void {
  }

  updateNote(): void {
    console.log('Atualizado');
  }
}
