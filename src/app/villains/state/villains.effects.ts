import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap, concatMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as VillainsActions from './villains.actions';
import { VillainsService } from '../villains.service';

@Injectable()
export class VillainsEffects {

  loadVillains$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(VillainsActions.loadVillains),
      exhaustMap(() =>
        this.villainsService.getAll().pipe(
          map(villains => VillainsActions.loadVillainsSuccess({ villains })),
          catchError(error => of(VillainsActions.loadVillainsFailure({ error }))))
      )
    );
  });

  addVillain$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(VillainsActions.addVillain),
      concatMap(({villain}) =>
        this.villainsService.add(villain).pipe(
          map(newVillain => VillainsActions.addVillainSuccess({ villain: newVillain })),
          catchError(error => of(VillainsActions.addVillainFailure({ error }))))
      )
    );
  });

  updateVillain$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(VillainsActions.updateVillain),
      concatMap(({villain}) =>
        this.villainsService.update(villain).pipe(
          map(newVillain => VillainsActions.updateVillainSuccess({ villain: newVillain })),
          catchError(error => of(VillainsActions.updateVillainFailure({ error }))))
      )
    );
  });

  deleteVillain$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(VillainsActions.deleteVillain),
      mergeMap(({villainId}) =>
        this.villainsService.delete(villainId).pipe(
          map(() => VillainsActions.deleteVillainSuccess({villainId})),
          catchError(error => of(VillainsActions.deleteVillainFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private villainsService: VillainsService) {}

}
