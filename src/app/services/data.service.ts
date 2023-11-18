import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Note } from '../note-details/note.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private notes: Note[] = [
    {id: '1', title: 'Заметка 1', text: '111 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias asperiores atque consectetur consequatur consequuntur culpa debitis delectus distinctio dolor dolorem doloribus dolorum ducimus eaque eos ex expedita facere fuga hic labore, magnam maiores molestias mollitia possimus provident quae quaerat quia quisquam, recusandae reiciendis sequi sint tenetur ullam veniam veritatis!'},
    {id: '2', title: 'Заметка 2', text: '222 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias asperiores atque consectetur consequatur consequuntur culpa debitis delectus distinctio dolor dolorem doloribus dolorum ducimus eaque eos ex expedita facere fuga hic labore, magnam maiores molestias mollitia possimus provident quae quaerat quia quisquam, recusandae reiciendis sequi sint tenetur ullam veniam veritatis!'},
    {id: '3', title: 'Заметка 3', text: '333 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias asperiores atque consectetur consequatur consequuntur culpa debitis delectus distinctio dolor dolorem doloribus dolorum ducimus eaque eos ex expedita facere fuga hic labore, magnam maiores molestias mollitia possimus provident quae quaerat quia quisquam, recusandae reiciendis sequi sint tenetur ullam veniam veritatis!'},
  ]

  fetchNotes(): Observable<Note[]> {
    return of(this.notes).pipe(delay(500))
  }

  getNoteById(id: string) {
    return this.notes.filter(note => note.id === id)[0]
  }

  addNote(note: Note) {
    this.notes.push(note)
  }
}
