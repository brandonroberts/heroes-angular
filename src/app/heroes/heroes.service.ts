import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from '../core';
import { environment } from '../../environments/environment';

const root = environment.API;

@Injectable({ providedIn: 'root' })
export class HeroesService {
  API_URL = `${root}/heroes/`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Hero[]>(this.API_URL);
  }

  add(hero: Hero) {
    return this.http.post<Hero>(this.API_URL, hero);
  }

  update(hero: Hero) {
    return this.http.put<Hero>(`${this.API_URL}/${hero.id}`, hero);
  }

  delete(heroId: string) {
    return this.http.delete(`${this.API_URL}/${heroId}`);
  }
}
