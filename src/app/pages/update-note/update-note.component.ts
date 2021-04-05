import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotesService } from 'src/app/shared/notes.service';
import { Note } from 'src/models/notes.model';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {

  public form: FormGroup;
  public note: Note;
  public noteId: number;

  constructor(private fb: FormBuilder,
              private notesService: NotesService,
              private route: ActivatedRoute,
              private router: Router) {
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
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe((params: Params) => {
      this.note = Note[params.id];
      if (params.id) {
        this.note = this.notesService.get(params.id);
        this.noteId = params.id;
      }
    });
  }

  updateNote(): void {
    const title = this.form.controls.title.value;
    const body = this.form.controls.body.value;
    this.notesService.update(this.noteId, title, body);
    this.router.navigateByUrl('/');
  }
}
