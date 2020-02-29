import { Action, createReducer, on, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as HeroesActions from './heroes.actions';
import { Hero } from '../../core';

export const heroesFeatureKey = 'heroes';

export interface State extends EntityState<Hero> {
  activeHeroId: string | null;
}

export const adapter = createEntityAdapter<Hero>();

export const initialState: State = adapter.getInitialState({
  activeHeroId: null
});

const heroesReducer = createReducer(
  initialState,
  on(HeroesActions.loadHeroesSuccess, (state, action) => adapter.addAll(action.heroes, state)),
  on(HeroesActions.addHeroSuccess, (state, action) => adapter.addOne(action.hero, state)),
  on(HeroesActions.updateHeroSuccess, (state, action) => adapter.updateOne({ id: action.hero.id, changes: action.hero }, state)),
  on(HeroesActions.deleteHeroSuccess, (state, action) => adapter.removeOne(action.heroId, state)),
);

export function reducer(state: State | undefined, action: Action) {
  return heroesReducer(state, action);
}

export const { selectAll, selectEntities } = adapter.getSelectors();
export const selectActiveHeroId = (state: State) => state.activeHeroId;
export const selectHero = createSelector(
  selectEntities,
  selectActiveHeroId,
  (entities, activeHeroId) => activeHeroId ? entities[activeHeroId] : null
);