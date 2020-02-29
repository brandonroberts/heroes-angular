import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHeroes from './heroes.reducer';

export const selectHeroesState = createFeatureSelector<fromHeroes.State>(
  fromHeroes.heroesFeatureKey
);

export const selectAllHeroes = createSelector(
  selectHeroesState,
  fromHeroes.selectAll
);

export const selectActiveHero = createSelector(
  selectHeroesState,
  fromHeroes.selectHero
);