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
    // exports: the subset of declarations that should be visible and usable in the component templates of other modules.
    //exports: [ ]
    // imports: other modules whose exported classes are needed by component templates declared in this module.
    imports: [ 
        BrowserModule,
        FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    // declarations: the view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.
    declarations: [ 
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    // providers: creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.
    providers: [ HeroService ],
    // bootstrap: the main application view, called the root component, that hosts all other app views. Only the root module should set this bootstrap property.  
    bootstrap: [ AppComponent ]
    
})
export class AppModule {}
