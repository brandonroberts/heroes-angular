import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { VillainDetailComponent } from './villain-detail/villain-detail.component';
import { VillainListComponent } from './villain-list/villain-list.component';
import { VillainsComponent } from './villains/villains.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromVillains from './state/villains.reducer';
import { VillainsEffects } from './state/villains.effects';

const routes: Routes = [
  {
    path: '',
    component: VillainsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forFeature('villains', fromVillains.reducer),
    EffectsModule.forFeature([VillainsEffects])    
  ],
  exports: [RouterModule, VillainsComponent],
  declarations: [
    VillainsComponent,
    VillainListComponent,
    VillainDetailComponent
  ]
})
export class VillainsModule {}
