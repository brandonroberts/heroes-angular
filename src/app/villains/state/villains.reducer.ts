import { Action, createReducer, on, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as VillainsActions from './villains.actions';
import { Villain } from '../../core';

export const villainsFeatureKey = 'villains';

export interface State extends EntityState<Villain> {
  activeVillainId: string | null;
}

export const adapter = createEntityAdapter<Villain>();

export const initialState: State = adapter.getInitialState({
  activeVillainId: null
});

const villainsReducer = createReducer(
  initialState,
  on(VillainsActions.loadVillainsSuccess, (state, action) => adapter.addAll(action.villains, state)),
  on(VillainsActions.addVillainSuccess, (state, action) => adapter.addOne(action.villain, state)),
  on(VillainsActions.updateVillainSuccess, (state, action) => adapter.updateOne({ id: action.villain.id, changes: action.villain }, state)),
  on(VillainsActions.deleteVillainSuccess, (state, action) => adapter.removeOne(action.villainId, state)),
);

export function reducer(state: State | undefined, action: Action) {
  return villainsReducer(state, action);
}

export const { selectAll, selectEntities } = adapter.getSelectors();
export const selectActiveVillainId = (state: State) => state.activeVillainId;
export const selectVillain = createSelector(
  selectEntities,
  selectActiveVillainId,
  (entities, activeVillainId) => activeVillainId ? entities[activeVillainId] : null
);