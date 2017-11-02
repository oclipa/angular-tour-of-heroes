import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()  // don't forget the parentheses!

export class HeroService {
    getHeroes(): Hero[] {
        return HEROES;
    }
}