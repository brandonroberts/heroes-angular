import { createAction, props } from '@ngrx/store';
import { Villain } from '../../core';

export const loadVillains = createAction(
  '[Villains Page] Load Villains'
);

export const loadVillainsSuccess = createAction(
  '[Villains/API] Load Villains Success',
  props<{ villains: Villain[] }>()
);

export const loadVillainsFailure = createAction(
  '[Villains/API] Load Villains Failure',
  props<{ error: any }>()
);

export const addVillain = createAction(
  '[Villains Page] Add Villain',
  props<{ villain: Villain }>()
);

export const addVillainSuccess = createAction(
  '[Villains/API] Add Villain Success',
  props<{ villain: Villain }>()
);

export const addVillainFailure = createAction(
  '[Villains/API] Add Villain Failure',
  props<{ error: any }>()
);

export const updateVillain = createAction(
  '[Villains Page] Update Villain',
  props<{ villain: Villain }>()
);

export const updateVillainSuccess = createAction(
  '[Villains/API] Update Villain Success',
  props<{ villain: Villain }>()
);

export const updateVillainFailure = createAction(
  '[Villains/API] Update Villain Failure',
  props<{ error: any }>()
);

export const deleteVillain = createAction(
  '[Villains/API] Delete Villain',
  props<{ villainId: string }>()
);

export const deleteVillainSuccess = createAction(
  '[Villains Page] Delete Villain Success',
  props<{ villainId: string }>()
);

export const deleteVillainFailure = createAction(
  '[Villains/API] Delete Villain Failure',
  props<{ error: any }>()
);