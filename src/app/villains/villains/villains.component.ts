import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Villain } from '../../core';
import { VillainsSelectors, VillainsActions } from '../state';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html'
})
export class VillainsComponent implements OnInit {
  selected: Villain;
  villains$ = this.store.select(VillainsSelectors.selectAllVillains);
  message = '?';
  villainToDelete: Villain;
  showModal = false;

  constructor(
    // , private modalService: ModalService
    private store: Store<{}>
  ) {}

  ngOnInit() {
    this.getVillains();
  }

  add(villain: Villain) {
    this.store.dispatch(VillainsActions.addVillain({villain}));
  }

  askToDelete(villain: Villain) {
    this.villainToDelete = villain;
    this.showModal = true;
    if (this.villainToDelete.name) {
      this.message = `Would you like to delete ${this.villainToDelete.name}?`;
    }
  }

  clear() {
    this.selected = null;
  }

  closeModal() {
    this.showModal = false;
  }

  deleteVillain() {
    this.closeModal();
    if (this.villainToDelete) {
      this.store.dispatch(VillainsActions.deleteVillain({villainId: this.villainToDelete.id}));
      this.villainToDelete = null;
    }
    this.clear();
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getVillains() {
    this.store.dispatch(VillainsActions.loadVillains());
    this.clear();
  }

  save(villain: Villain) {
    if (this.selected && this.selected.name) {
      this.store.dispatch(VillainsActions.updateVillain({villain}));
    } else {
      this.store.dispatch(VillainsActions.addVillain({villain}));
    }
  }

  select(villain: Villain) {
    this.selected = villain;
  }

  update(villain: Villain) {
    this.store.dispatch(VillainsActions.updateVillain({villain}));
  }
}
