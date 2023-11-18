import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isModalActive = false

  setModalActive() {
    this.isModalActive = true
  }

  setModalNonActive() {
    this.isModalActive = false
  }
}
