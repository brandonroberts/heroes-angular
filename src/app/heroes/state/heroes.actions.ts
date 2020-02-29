import { createAction, props } from '@ngrx/store';
import { Hero } from '../../core';

export const loadHeroes = createAction(
  '[Heroes Page] Load Heroes'
);

export const loadHeroesSuccess = createAction(
  '[Heroes/API] Load Heroes Success',
  props<{ heroes: Hero[] }>()
);

export const loadHeroesFailure = createAction(
  '[Heroes/API] Load Heroes Failure',
  props<{ error: any }>()
);

export const addHero = createAction(
  '[Heroes Page] Add Hero',
  props<{ hero: Hero }>()
);

export const addHeroSuccess = createAction(
  '[Heroes/API] Add Hero Success',
  props<{ hero: Hero }>()
);

export const addHeroFailure = createAction(
  '[Heroes/API] Add Hero Failure',
  props<{ error: any }>()
);

export const updateHero = createAction(
  '[Heroes Page] Update Hero',
  props<{ hero: Hero }>()
);

export const updateHeroSuccess = createAction(
  '[Heroes/API] Update Hero Success',
  props<{ hero: Hero }>()
);

export const updateHeroFailure = createAction(
  '[Heroes/API] Update Hero Failure',
  props<{ error: any }>()
);

export const deleteHero = createAction(
  '[Heroes/API] Delete Hero',
  props<{ heroId: string }>()
);

export const deleteHeroSuccess = createAction(
  '[Heroes Page] Delete Hero Success',
  props<{ heroId: string }>()
);

export const deleteHeroFailure = createAction(
  '[Heroes/API] Delete Hero Failure',
  props<{ error: any }>()
);