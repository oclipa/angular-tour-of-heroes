import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: [ './hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
      ) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id'))) // "+" converts string to number
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back(); // Going back too far could take users out of the app. In a real app, you can prevent this issue with the CanDeactivate guard.
    }

    save(): void {
        this.heroService.update(this.hero)
          .then(() => this.goBack());
    }

    @Input() hero: Hero;
}