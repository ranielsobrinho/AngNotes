import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { UpdateNoteComponent } from './pages/update-note/update-note.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', component: NotesListComponent},
    {path: ':id', component: UpdateNoteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainLayoutComponent, NotesListComponent, UpdateNoteComponent];
