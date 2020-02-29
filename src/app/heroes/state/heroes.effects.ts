import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap, concatMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as HeroesActions from './heroes.actions';
import { HeroesService } from '../heroes.service';

@Injectable()
export class HeroesEffects {

  loadHeroes$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(HeroesActions.loadHeroes),
      exhaustMap(() =>
        this.heroesService.getAll().pipe(
          map(heroes => HeroesActions.loadHeroesSuccess({ heroes })),
          catchError(error => of(HeroesActions.loadHeroesFailure({ error }))))
      )
    );
  });

  addHero$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(HeroesActions.addHero),
      concatMap(({hero}) =>
        this.heroesService.add(hero).pipe(
          map(newHero => HeroesActions.addHeroSuccess({ hero: newHero })),
          catchError(error => of(HeroesActions.addHeroFailure({ error }))))
      )
    );
  });

  updateHero$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(HeroesActions.updateHero),
      concatMap(({hero}) =>
        this.heroesService.update(hero).pipe(
          map(newHero => HeroesActions.updateHeroSuccess({ hero: newHero })),
          catchError(error => of(HeroesActions.updateHeroFailure({ error }))))
      )
    );
  });

  deleteHero$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(HeroesActions.deleteHero),
      mergeMap(({heroId}) =>
        this.heroesService.delete(heroId).pipe(
          map(() => HeroesActions.deleteHeroSuccess({heroId})),
          catchError(error => of(HeroesActions.deleteHeroFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private heroesService: HeroesService) {}

}
