import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Villain } from '../core';
import { environment } from '../../environments/environment';

const root = environment.API;

@Injectable({ providedIn: 'root' })
export class VillainsService {
  API_URL = `${root}/villains/`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Villain[]>(this.API_URL);
  }

  add(villain: Villain) {
    return this.http.post<Villain>(this.API_URL, villain);
  }

  update(villain: Villain) {
    return this.http.put<Villain>(`${this.API_URL}/${villain.id}`, villain);
  }

  delete(villainId: string) {
    return this.http.delete(`${this.API_URL}/${villainId}`);
  }
}
