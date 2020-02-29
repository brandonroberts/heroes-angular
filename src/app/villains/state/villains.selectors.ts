import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromVillains from './villains.reducer';

export const selectVillainsState = createFeatureSelector<fromVillains.State>(
  fromVillains.villainsFeatureKey
);

export const selectAllVillains = createSelector(
  selectVillainsState,
  fromVillains.selectAll
);

export const selectActiveVillain = createSelector(
  selectVillainsState,
  fromVillains.selectVillain
);