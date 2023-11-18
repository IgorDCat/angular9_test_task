import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../services/modal.service';
import { DataService } from '../services/data.service';
import { Note } from '../note-details/note.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  form: FormGroup

  constructor(
    public modalService: ModalService,
    private dataService: DataService
  ) {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      text: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit(): void {
  }

  addNote() {
    let newNote: Note = this.form.value
    newNote['id'] = String(Math.random())
    this.dataService.addNote(newNote)
    this.modalService.setModalNonActive()
  }
}
