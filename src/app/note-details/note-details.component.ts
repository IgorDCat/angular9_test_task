import { Component, OnDestroy, OnInit } from '@angular/core';
import { Note } from './note.model';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit, OnDestroy {
  currentNote: Note | undefined
  id: string
  routeSub: Subscription

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.id = params['id']
      this.currentNote = this.dataService.getNoteById(this.id)
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}
