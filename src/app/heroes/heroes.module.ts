import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromHeroes from './state/heroes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects } from './state/heroes.effects';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forFeature('heroes', fromHeroes.reducer),
    EffectsModule.forFeature([HeroesEffects])
  ],
  exports: [RouterModule, HeroesComponent],
  declarations: [HeroesComponent, HeroListComponent, HeroDetailComponent]
})
export class HeroesModule {}
