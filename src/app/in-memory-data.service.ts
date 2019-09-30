import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
    const heroes = [
      { id: 11, name: 'A', type: 'terrace', address: 'aaa', quantity: 5 },
      { id: 12, name: 'B', type: 'terrace', address: 'bbb', quantity: 5  },
      { id: 13, name: 'C', type: 'terrace', address: 'ccc', quantity: 5  },
      { id: 14, name: 'D', type: 'terrace', address: 'ddd', quantity: 5  },
      { id: 15, name: 'E', type: 'terrace', address: 'eee', quantity: 5  },
      { id: 16, name: 'F', type: 'terrace', address: 'fff', quantity: 5  },
      { id: 17, name: 'G', type: 'terrace', address: 'ggg', quantity: 5  },
      { id: 18, name: 'H', type: 'terrace', address: 'hhh', quantity: 5  },
      { id: 19, name: 'I', type: 'terrace', address: 'iii', quantity: 5  },
      { id: 20, name: 'J', type: 'terrace', address: 'jjj', quantity: 5  }
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
