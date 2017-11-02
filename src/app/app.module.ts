import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <- NgModel lives here
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; // replaces the Http client's XHR backend service with an in-memory alternative
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroService }         from './hero.service';
import { HeroSearchComponent } from './hero-search.component';

import { AppRoutingModule }    from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    providers: [ HeroService ],  
    bootstrap: [ AppComponent ]
    
})
export class AppModule {}
