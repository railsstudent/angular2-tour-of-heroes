import { Injectable } from 'angular2/core';

export class Crisis {
  constructor(public id: number, public name: string) {}
}

@Injectable()
export class CrisisService {

  getCrises() {
    return crisisPromise;
  }

  getCrisis(id: number) {
    return crisisPromise
            .then(crises => crises.filter(c => c.id === id)[0]);
  }
}

var crises = [
  new Crisis(1, 'Princess Held Captive'),
  new Crisis(2, 'Dragon Burning Cities'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Release Deadline Looms')
];

var crisisPromise = Promise.resolve(crises);
