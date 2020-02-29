import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from '../../core';
import { HeroesActions, HeroesSelectors } from '../state';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  selected: Hero;
  heroes$ = this.store.select(HeroesSelectors.selectAllHeroes);
  message = '?';
  heroToDelete: Hero;
  showModal = false;

  constructor(
    // , private modalService: ModalService
    private store: Store<{}>
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  add(hero: Hero) {
    this.store.dispatch(HeroesActions.addHero({hero}));
  }

  askToDelete(hero: Hero) {
    this.heroToDelete = hero;
    this.showModal = true;
    if (this.heroToDelete.name) {
      this.message = `Would you like to delete ${this.heroToDelete.name}?`;
    }
  }

  clear() {
    this.selected = null;
  }

  closeModal() {
    this.showModal = false;
  }

  deleteHero() {
    this.closeModal();
    if (this.heroToDelete) {
      this.store.dispatch(HeroesActions.deleteHero({heroId: this.heroToDelete.id}));
      this.heroToDelete = null;
    }
    this.clear();
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getHeroes() {
    this.store.dispatch(HeroesActions.loadHeroes());
    this.clear();
  }

  save(hero: Hero) {
    if (this.selected && this.selected.name) {
      this.store.dispatch(HeroesActions.updateHero({hero}));
    } else {
      this.store.dispatch(HeroesActions.addHero({hero}));
    }
  }

  select(hero: Hero) {
    this.selected = hero;
  }

  update(hero: Hero) {
    this.store.dispatch(HeroesActions.updateHero({hero}));
  }
}
