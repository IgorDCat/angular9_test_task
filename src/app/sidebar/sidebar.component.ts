import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Note } from '../note-details/note.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  notes: Note[]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchNotes().subscribe(res => this.notes = res)
  }
}
