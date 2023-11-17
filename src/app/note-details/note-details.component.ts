import { Component, OnInit } from '@angular/core';
import { Note } from './note.model';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  currentNote: Note | undefined
  id: string

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
      this.currentNote = this.dataService.getNoteById(this.id)
    })
  }
}
