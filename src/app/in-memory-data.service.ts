import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Hielo' , descp: 'Super Fuerza'},
	  { id: 12, name: 'Iron Man', descp: 'Tiene armadura robotica'},
	  { id: 13, name: 'Superman', descp: 'Puede volar, tiene superfueza'},
	  { id: 14, name: 'Flash', descp: 'Velocidad'},
	  { id: 15, name: 'Hombre Araña', descp: '´Tiene poderes arácnidos'},
	  { id: 16, name: 'RubberMan', descp: 'Invicibilidad'},
	  { id: 17, name: 'Dynama' , descp: 'Velocidad'},
	  { id: 18, name: 'Dr IQ' , descp: 'Super Inteligencia'},
	  { id: 19, name: 'Magma', descp: 'Poder fuego' },
	  { id: 20, name: 'Tornado', descp: 'Poder viento' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
