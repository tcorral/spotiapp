# spotiapp
Angular 7 app using Spotify Developers API

## Steps
1. Resources provided for the app have been added to the resources folder.
2. Create a new Angular app:
```javascript
ng new spotiapp
```
3. Create a new app in Spotify:

    * Open https://developer.spotify.com/dashboard in your browser
    * Login or sign-up
    * Click in button **Create a client ID**
        - Step 1
            * App or Hardware Name = **spotiapp**
            * App or Hardware Description = **Spotify Training App**
            * What are you building = **Website**
            * Click **Next** button.
        - Step 2
            * Are you developing a commercial integration? = **No**
        - Step 3
            * Check all the checkboxes.
            * Click **Submit** button

    Once you have finished the creation process, you are presented with the details of your new app. From this page you have to store in a save place two things:

    * Client ID
    * Client Secret

    These two hashes will be needed to interact with the Spotify REST API.
4. Execute the application:

    * Change directory to the root of the app
    ```bash
    cd spotiapp
    ```
    * Open up the server:
    There are two different commands you can use to run the server to serve your application.

        1. Using **angular-cli**
            ```bash
            ng serve
            ```
        2. Using **npm**
            ```bash
            npm start
            ```

        Both commands will run your application.
        Once the compilation is finished and the server is running you can open the server url in your browser. http://localhost:4200

5. Mock-ups of our app.
    - Home
    ![Home](./mockups/HOME.png "Home Mock-up")

    - Search
     ![Search](./mockups/SEARCH.png "Search Mock-up")

    - Artist
     ![Artist](./mockups/ARTIST.png "Artist Mock-up")

6. Create page components:

    * Open terminal.
    * Change directory to the root of the app
    ```bash
    cd spotiapp
    ```
    #### HOME PAGE COMPONENT 
    * Create HOME component
        * Component only
        ```bash
        ng g c components/home --spec=false -is
        ```
        * Component + Tests only
        ```bash
        ng g c components/home -is
        ```
        * Component + Tests + Styles
        ```bash
        ng g c components/home
        ```
    * Check ```spoti-app/spotiapp/src/app/app.module.ts``` has been updated adding home component.
    #### SEARCH PAGE COMPONENT
    * Create SEARCH component
        * Component only
        ```bash
        ng g c components/search --spec=false -is
        ```
        * Component + Tests only
        ```bash
        ng g c components/search -is
        ```
        * Component + Tests + Styles
        ```bash
        ng g c components/search
        ```
    * Check ```spoti-app/spotiapp/src/app/app.module.ts``` has been updated adding search component.
    #### ARTIST PAGE COMPONENT
    * Create ARTIST component
        * Component only
        ```bash
        ng g c components/artist --spec=false -is
        ```
        * Component + Tests only
        ```bash
        ng g c components/artist -is
        ```
        * Component + Tests + Styles
        ```bash
        ng g c components/artist
        ```
    * Check ```spoti-app/spotiapp/src/app/app.module.ts``` has been updated adding artist component.
    #### COMMON NAVIGATION COMPONENT
    * Create Navigation component
        * Component only
        ```bash
        ng g c components/shared/navbar --spec=false -is
        ```
        * Component + Tests only
        ```bash
        ng g c components/shared/navbar -is
        ```
        * Component + Tests + Styles
        ```bash
        ng g c components/shared/navbar
        ```
    * Check ```spoti-app/spotiapp/src/app/app.module.ts``` has been updated adding navigation component.

7. Allocate the resources were they will be used.

    * Copy ```spoti-app/resources/img``` to ```spoti-app/spotiapp/src/assets```
    * Replace ```spoti-app/spotiapp/src/styles.css``` with ```spoti-app/resources/styles.css```

8. Add Bootstrap 4 to our project.

    * Open [Bootstrap CDN](https://getbootstrap.com/docs/4.1/getting-started/download/#bootstrapcdn) in your browser.
    * Open ```spoti-app/spotiapp/src/index.html```
    * Copy the following snippet at the end of **head** node.
        ```html
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        ```
    * Copy the following snippet at the end of **body** node.
        ```html
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        ```

9. Creating app routes:

    * Open file ```spoti-app/spotiapp/src/app/app-routing.module.ts```
    * Add configuration to use hash in the url
        ```typescript
        @NgModule({
            imports: [RouterModule.forRoot(routes, { useHash: true })],
            exports: [RouterModule]
        })
        ```
    #### Home Page Route:
    * After the existing imports add the following code.
        ```typescript
        import { HomeComponent } from './components/home/home.component';
        ```
    * Add the route path in the array **routes**
        ```typescript
        const routes: Routes = [
            { path: 'home', component: HomeComponent}
        ];
        ```
    #### Search Page Route:
    * After the existing imports add the following code.
        ```typescript
        import { SearchComponent } from './components/search/search.component';
        ```
    * Add the route path in the array **routes**
        ```typescript
        const routes: Routes = [
            { path: 'home', component: HomeComponent},
            { path: 'search', component: SearchComponent}
        ];
        ```
    #### Wildcards Routes:
    * Add the route path in the array **routes**
        ```typescript
        const routes: Routes = [
            { path: 'home', component: HomeComponent},
            { path: 'search', component: SearchComponent},
            { path: '', pathMatch: 'full', redirectTo: 'home'},
            { path: '**', pathMatch: 'full', redirectTo: 'home'}
        ];
        ```
10. Creating the basic layout:

    * Open ```spoti-app/spotiapp/src/app/app.component.html``` and remove all its content.
    #### Adding navigation:
    * Insert the following code:
        ```html
        <app-navbar></app-navbar>
        
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        ```
    * Open ```http://localhost:4200``` in your browser and check how routing is working.

11. Making changes in navigation bar:

    * Open ```spoti-app/spotiapp/src/app/components/shared/navbar/navbar.component.html``` and remove all its content.
    * Open [Navbar Bootstrap](https://getbootstrap.com/docs/4.1/components/navbar/#supported-content)
    * Copy the content of the first code snippet in ```spoti-app/spotiapp/src/app/components/shared/navbar/navbar.component.html```
    * See how it is shown in the app.
    #### Tweaking and cleaning up navbar.
    * We need to do some cleaning up in this markup, so replace it by the following code:
        ```html
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
                <img src="assets/img/banner-ico.png" width="30" height="30" alt=""> Spotiapp
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" routerLinkActive="active">
                        <a class="nav-link" routerLink="home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" routerLink="search">Search</a>
                    </li>
                </ul>
            </div>
        </nav>
        ```
12. Adding space between page content and navigation bar.
    
    As you can see the page content is touching the navigation bar and this doesn't let the design to breath. To solve this we have to add some space between both.

    * Open ```spoti-app/spotiapp/src/app/app.component.html``` and add a class to add some margin as you can see in the next piece of code.
        ```html
        <app-navbar></app-navbar>

        <div class="container m-5">
            <router-outlet></router-outlet>
        </div>
        ```
13. Start working with services:

    #### Creating Spotify service:
    * Create our first service:
        ```bash
        ng g s services/spotify --spec=false
        ```
    * For this exercise we are going to use a public api to fetch what countries speak Dutch. 
        * [REST Countries](https://restcountries.eu/)
        * https://restcountries.eu/rest/v2/lang/nl
    * In order to make it work we need to add some code to our service.
        ```typescript
        import { Injectable } from '@angular/core';
        import { HttpClient } from '@angular/common/http'; // < added

        @Injectable({
        providedIn: 'root'
        })
        export class SpotifyService {

            constructor(private http: HttpClient) {} // < added

            getCountriesSpeakingDutch() { // < added
                return this.http
                .get(`https://restcountries.eu/rest/v2/lang/nl`)
            }
        }
        ```
    #### Adding HttpClientModule and service to app module:
    * Open ```spoti-app/spotiapp/src/app/app.module.ts``` and after the last import add the following:
        ```typescript
        import { HttpClientModule } from '@angular/common/http';
        ```
    * Add module to NgModule imports sections
        ```typescript
        @NgModule({
            declarations: [
                AppComponent,
                HomeComponent,
                ArtistComponent,
                NavbarComponent,
                SearchComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule // < Add module here
            ],
            providers: [ ]
            bootstrap: [AppComponent]
            })
        ```
    #### Use service from Home Component:
    * Open ```spoti-app/spotiapp/src/app/components/home/home.component.ts```
    * Add some code to get data from REST API.
        * Component file:
            ```typescript
            import { Component, OnInit } from '@angular/core';
            import { SpotifyService } from '../../services/spotify.service'; // < added

            @Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styles: []
            })
            export class HomeComponent implements OnInit {

            countries: any[] = [];  // < added

            constructor(private spotifyService: SpotifyService) { } // < added

            ngOnInit() {
                this.spotifyService             // < added
                .getCountriesSpeakingDutch()
                .subscribe((response: any[]) => {
                    this.countries = response;
                });
            }

            }
            ```
        * HTML file:
            ```typescript 
            <ul>
                <li *ngFor="let country of countries">
                    {{ country.name }}
                </li>
            </ul>
            ```
    
14. Removing demo service method and usage.

    * Open ```spoti-app/spotiapp/src/app/services/spotify.service.ts``` and remove **getCountriesSpeakingDutch** method.
    * Open ```spoti-app/spotiapp/src/app/components/home/home.component.html``` and remove the **ul** and children.
    * Open
    ```spoti-app/spotiapp/src/app/components/home/home.component.ts``` and...
        * Remove the code inside **ngOnInit** 
        * Remove **countries** property

15. Setting up our service to get the Spotify JWT Token on each request:

    Our application will use Spotify JWT Token and as we have created our app in Spotify Developers page now it's time to set it up.

    * Clone the repo:
        ```bash
        git clone https://github.com/tcorral/spotify-get-token.git
        ```
    * Run server:

        ```bash
        npm start
        ```
        The server will listen in port 3000 and the url to get the token is:
            * ```http://localhost:3000/spotify/:client_id/:client_secret``` 
            * It will require you to provide your client id and the client secret.
        
        #### Example:
        http://localhost:3000/spotify/f7d4864e23544f919f3d5552e2a88478/6666625842324f1ca4e1e2ef81387e46
    
16. Create service method to fetch latest releases from Spotify:

    The first service method we are going to create will be used in home page where we are going to show the latest releases.

    #### How to perform the request:
    * Open ```https://developer.spotify.com/console/get-new-releases/``` in your browser and click on **Try it** button
    * Copy the value of **OAuth Token** because will need it in a minute or two.
    * In the right sidebar you can see how this request has been performed and what is needed to make it work.
        ```bash
            curl -X "GET" "https://api.spotify.com/v1/browse/new-releases" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer ABCDMYE7EJ91iCpMGiCFDNchrSdWE-zYOMX2FMc-siji7_0oM6x7Tqpk8gOEhbEr21lSpFD6h43OFYiWF15EABEJLWbbn71X9iOQ21So1c061O13Yi-XIr83_c-PFsn_WOiULqlSGnL086g_aaF6aMzYSqbt5fQAi105kl9TUhvXRVwi-PGyYJ7neWF9aNOycZPdreq5Fa4lWw55Lpp2BbZQ8Bkijv7HQ8g3jQ4wctwSg6_QraJHIeRaoNPBcIO8KBVc3oeVpL6R"
        ```
        Let's break it down:

        * url = ```https://api.spotify.com/v1/browse/new-releases```
        * headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer xxxxxxJWTxTokenxxxxxxxxxx'
        }
    #### Implementing service method:
    * Open ```spoti-app/spotiapp/src/app/services/spotify.service.ts``` and add method **getNewReleases** as follows:
        ```typescript
        getNewReleases() {
            const url = `https://api.spotify.com/v1/browse/new-releases`;
            const headers = new HttpHeaders({
            'Authorization': `Bearer <<TOKEN>>`
            });

            return this.http.get(url, { headers });
        }
        ```
        Replace ```<<TOKEN>>``` by the Oauth Token you had to get copied from ```https://developer.spotify.com/console/get-new-releases/```
    * Open ```spoti-app/spotiapp/src/app/components/home/home.component.ts``` and replace the content with:
        ```typescript
        import { Component, OnInit } from '@angular/core';
        import { SpotifyService } from '../../services/spotify.service';

        @Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styles: []
        })
        export class HomeComponent implements OnInit {

            newReleases: any[] = [];    // < added

            constructor(private spotifyService: SpotifyService) { }

            ngOnInit() {
                this.spotifyService         // < added
                .getNewReleases()
                .subscribe((newReleases: any[]) => {
                    console.log('new releases:', newReleases);
                    this.newReleases = newReleases;
                })
            }

        }
        ```

17. Hub authentication in a single method.

    As any JWT Token, the one from Spotify will expire and it will be needed to renew it, that's why we cloned and run the project **spotify-get-token**

    The problem because of the expire is that from time to time we can have problems on getting data because this token that is what server uses to authenticate us.

    In this exercise we are going to create a hub method in our service that:

    1. It will get a token from Spotify
    2. It will set the headers to get authenticated.
    3. It will abstract the common part of the url.

    * Open ```spoti-app/spotiapp/src/app/services/spotify.service.ts``` and add the next piece of code below the constructor.
        ```typescript
        getQuery (query) {
            return this.http.get('http://localhost:3000/spotify/<<CLIENTID>>/<<CLIENT_SECRET>>')  // < Replace <<CLIENTID>> and <<CLIENT_SECRET>> with your actual client id and client secret.
            .pipe(
                switchMap((data: any) => {
                    const token = data.access_token;
                    const url = `https://api.spotify.com/v1/${query}`;
                    const headers = new HttpHeaders({
                        'Authorization': `Bearer ${token}`
                    });
            
                    return this.http.get(url, { headers });
                })
            );
        }
        ```
    * Change **getNewReleases** method to:
        ```typescript
        getNewReleases() {
            return this
                .getQuery(`browse/new-releases`);
        }
        ```
    * With this change everything should still be working but now our token will get renewed on each request.

18. Simplify data provided by service:

    As you could see, we are receiving an object that contains a property called **albums** and this contains a lot of information that we might be not use.

    This exercise will simplify the response for new releases so that we only get what we will make use in Home component.

    * Open ```spoti-app/spotiapp/src/app/services/spotify.service.ts``` and refactor **getNewReleases** as follows:
        ```typescript
        getNewReleases() {
            return this
                .getQuery(`browse/new-releases?limit=20`)
                .pipe(  // < added
                    map((response: any) => {
                        return response.albums.items
                    })
                );
        }
        ```
    What we are doing on this method is using Observables, streams, to pipe this value and then map the response to only return *response.albums.items* Now if you open Home page you can see that the value in console has changed.

19. Implementing new releases in Home Component.

    In order to show the new releases in Home Component we will use a Bootstrap component called Cards and we are going to show them replicating Pinterest style with columns.

    #### Setting basic markup
    * Open ```https://getbootstrap.com/docs/4.1/components/card/#card-columns``` in your browser and copy only the first eight lines of the code snippet.
        ```html
        <div class="card-columns">
            <div class="card">
                <img class="card-img-top" src=".../100px160/" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Card title that wraps to a new line</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
        ```
    * Open ```spoti-app/spotiapp/src/app/components/home/home.component.html``` and replace its content with the code we copied in previous step.
    #### Creating a card per each album or single
    * Modify the markup to use ***ngFor**
        ```typescript
        <div class="card-columns">
            <div *ngFor="let release of newReleases" class="card">
                <img class="card-img-top" [src]="release.images[0].url" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ release.name }}</h5>
                    <p class="card-text">
                        <span *ngFor="let artist of release.artists" class="badge badge-pill badge-primary">{{ artist.name }}</span>
                    </p>
                </div>
            </div>
        </div>
        ```
20. Implementing Search Component.

    In this exercise we will use an input box to set a value and this value will be used to fetch from server the artists that have this value in name.

    ### Setting markup
    * Open ```spoti-app/spotiapp/src/app/components/search/search.component.html``` and remove all its content and replace it by the following code.
        ```html
        <div class="row">
            <div class="col">
                <input #term type="text" (keyup)="search(term.value)" class="form-control" placeholder="Search Artist">
            </div>
        </div>
        <div class="row m-3">
            <div class="col">
                <div class="card-columns">
                    <div *ngFor="let artist of artists" class="card">
                        <img class="card-img-top" [src]="artist.images[0].url" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">{{ artist.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ```
    #### Creating service method to fetch artists by name.
    * Open ```https://developer.spotify.com/console/get-search-item/``` in your browser.
        * Set the value of **type** input box to ```artist```
        * Set the value of **q** input box to any artist name you want to search for
        * See the results on the right sidebar.
    * Open ```spoti-app/spotiapp/src/app/services/spotify.service.ts``` and add the following code.
        ```typescript
        getArtists(query) {
            return this
            .getQuery(`search?query=${query}&type=artist`)
            .pipe(
                map((response: any) => response.artists.items)
            );
        }
        ```
    #### Implement the search method in Search Component.
    * Open ```spoti-app/spotiapp/src/app/components/search/search.component.ts``` and after **ngOnInit** add replace the existing code by the following piece of code.
        ```typescript
        import { Component, OnInit } from '@angular/core';
        import { SpotifyService } from 'src/app/services/spotify.service';

        @Component({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styles: []
        })
        export class SearchComponent implements OnInit {

            artists: any[] = [];

            constructor(private spotifyService: SpotifyService) { }

            ngOnInit() {}

            search(term) {
                this.spotifyService
                    .getArtists(term)
                    .subscribe(artists => {
                        this.artists = artists;
                    });
            }
        }
        ``` 
    
    After implementing this you might see some 404 errors in the console as well as cards without image and name, this happens because there are items that doesn't contain any image by default. Our next step will be to implement a pipe to solve this problem.

21. Creating a pipe to manage images.

    As you could see in the previous exercise, when there is no image, not only the image is not rendered but also the rest of the template is not rendered either.

    On this exercise we are going to build a pipe that will receive the array of images and if there is an image it will use this url but if the image is not there we will show one by default.

    We have added a new file in resources named **noimage.png** this is the default image we will use if there is no image in artist.

    #### Setting default image.
    * Copy the file you can find in ```spoti-app/resources/noimage.png``` to ```spoti-app/spotiapp/src/assets/img/noimage.png```
    #### Creating our first pipe.
    A pipe has a **transform** method that will receive the value from the left and some arguments, if needed, from the right using **:** separator.
    * Create a new pipe
        ```bash
        ng g p pipes/noimage --spec=false
        ```
    * Open ```spoti-app/spotiapp/src/app/pipes/noimage.pipe.ts``` and replace the **transform** method by the following code snippet.
        ```typescript
        transform(images: any[]): string {
            if (!images || images.length === 0) {
                return 'assets/img/noimage.png';
            }
            if (images.length > 0) {
                return images[0].url;
            }
        }
        ```
    #### Using our pipe
    * Open ```spoti-app/spotiapp/src/app/components/search/search.component.html``` and replace ```artist.images[0].url``` by ```artist.images | noimage```

22. Create a Cards Component

    As you could see in the implementation of Home Component and Search Component we have duplicated part of the code to show the cards for artist and  new releases. 
    In this exercise we are going to remove the duplicated code by creating a new Cards Component that we can use wherever is needed.
    This component will be used as an UI component, so it will only receive and render data.

    * Change directory to spotiapp
        ```bash
        cd spotiapp
        ```
    * Creating Cards Component
        ```bash
        ng g c components/shared/cards --spec=false -is
       ```
    * Remove the content of file ```spoti-app/spotiapp/src/app/components/shared/cards/cards.component.html``` 
    * Copy the content of ```spoti-app/spotiapp/src/app/components/home/home.component.html``` to ```spoti-app/spotiapp/src/app/components/shared/cards/cards.component.html``` 

    The problem now is that there are a few differences between both card types, the ones used for Home Component and the ones used for Search Component. Our next job will be to create a common component that will handle both use cases.

    #### Differences between Home Component and Search Component cards.
    1. We have to simplify the name of the data we are receiving.
    2. We have to implement the noimage pipe to be used in both
    3. If data contains **artists** then we should show them as badges.

    #### Simplify Cards Component
    * Open ```spoti-app/spotiapp/src/app/components/shared/cards/cards.component.ts``` and replace its content by this piece of code.
        ```typescript
        import { Component, OnInit, Input } from '@angular/core';
        import { Router } from '@angular/router';

        @Component({
            selector: 'app-cards',
            templateUrl: './cards.component.html',
            styleUrls: []
        })
        export class CardsComponent implements OnInit {

            @Input()
            items: any[] = [];

            constructor(private router: Router) { }

            ngOnInit() {}
        }
        ```
    * Open ```spoti-app/spotiapp/src/app/components/shared/cards/cards.component.html``` and replace its content by the following code.
        ```html
        <div class="card-columns">
            <div *ngFor="let item of items" class="card">
                <img class="card-img-top" [src]="item.images | noimage" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <p class="card-text" *ngIf="item.artists">
                        <span *ngFor="let artist of item.artists" class="badge badge-pill badge-primary">{{ artist.name }}</span>
                    </p>
                </div>
            </div>
        </div>
        ```  
    #### Replace the cards html code from Home Component
    * Open ```spoti-app/spotiapp/src/app/components/home/home.component.html``` remove its content and replace it by this code snippet.
        ```html
        <app-cards [items]="newReleases"></app-cards>
        ```
    #### Replace the cards html code from Search Component
    * Open ```spoti-app/spotiapp/src/app/components/search/search.component.html``` remove its content and replace it by this code snippet.
        ```html
        <div class="row">
            <div class="col">
                <input #term type="text" (keyup)="search(term.value)" class="form-control" placeholder="Search Artist">
            </div>
        </div>
        <div class="row m-3">
            <div class="col">
                <app-cards [items]="artists"></app-cards>
            </div>
        </div>
        ```

    Now you can see how we have removed duplicated the code and we have created an UI component that can be used anywhere it's needed.
23. Create a Loading Component

    Sometimes depending of the connectivity the results can take longer to get returned from server and in the meantime the user doesn't know if something is wrong or not. To let the user know that the request is still going on we need to create a Loading Component that will show a spinner in our page.

    #### Creating component
    * Change directory to spotiapp
        ```bash
        cd spotiapp
        ```
    * Create Loading Component
        ```bash
        ng g c components/shared/loading --spec=false -is
        ```` 
    * Open ```https://fontawesome.com/icons?d=gallery&q=sync``` to see what font are we going to use.
    #### Adding Font awesome css
    * Open ```spoti-app/spotiapp/src/index.html``` and add ```<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">``` right before the head closing tag.
    #### Setting the markup
    * Open ```spoti-app/spotiapp/src/app/components/shared/loading/loading.component.html``` and replace its content by the next piece of code.
        ```html
        <div class="row text-center animated fadeIn m-5">
            <div class="col">
                <i class="fas fa-spin fa-sync fa-5x"></i>
            </div>
        </div>
        ```
    #### Making use of Loading Component in Home Component.
    * Open ```spoti-app/spotiapp/src/app/components/home/home.component.html``` and add ```<app-loading *ngIf="loading"></app-loading>``` before the existing code.
    * Open ```spoti-app/spotiapp/src/app/components/home/home.component.ts``` and replace its content by the next code snippet.
        ```typescript
        import { Component, OnInit } from '@angular/core';
        import { SpotifyService } from '../../services/spotify.service';

        @Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styles: []
        })
        export class HomeComponent implements OnInit {
            newReleases: any[] = [];
            loading: boolean = false;

            constructor(private spotifyService: SpotifyService) { }

            ngOnInit() {
                this.loading = true;
                this.spotifyService
                    .getNewReleases()
                    .subscribe((newReleases: any[]) => {
                        this.newReleases = newReleases;
                        this.loading = false;
                    });
            }
        }
        ```
    #### Making use of Loading Component in Search Component.
    * Open ```spoti-app/spotiapp/src/app/components/search/search.component.html``` and replace its content by the next piece of code.
        ```html
        <div class="row">
            <div class="col">
                <input #term type="text" (keyup)="search(term.value)" class="form-control" placeholder="Search Artist">
            </div>
        </div>
        <div class="row m-3">
            <div class="col">
                <app-loading *ngIf="loading"></app-loading>
                <app-cards *ngIf="!loading" [items]="artists"></app-cards>
            </div>
        </div>
        ```
    * Open ```spoti-app/spotiapp/src/app/components/search/search.component.ts``` and replace its content by the following code.
        ```typescript
        import { Component, OnInit } from '@angular/core';
        import { SpotifyService } from 'src/app/services/spotify.service';

        @Component({
            selector: 'app-search',
            templateUrl: './search.component.html',
            styles: []
        })
        export class SearchComponent implements OnInit {
            loading: boolean = false;
            artists: any[] = [];

            constructor(private spotifyService: SpotifyService) { }

            ngOnInit() {}

            search(term) {
                this.loading = true;
                this.spotifyService
                    .getArtists(term)
                    .subscribe(artists => {
                        this.artists = artists;
                        this.loading = false;
                    });
            }
        }
        ```
24. Add route for artist page.

    * Open ```spoti-app/spotiapp/src/app/app-routing.module.ts``` and replace its content by the code underneath.
        ```typescript
        import { NgModule } from '@angular/core';
        import { Routes, RouterModule } from '@angular/router';
        import { HomeComponent } from './components/home/home.component';
        import { SearchComponent } from './components/search/search.component';
        import { ArtistComponent } from './components/artist/artist.component'; // < added

        const routes: Routes = [
            { path: 'home', component: HomeComponent},
            { path: 'search', component: SearchComponent},
            { path: 'artist/:id', component: ArtistComponent},  // < added
            { path: '', pathMatch: 'full', redirectTo: 'home'},
            { path: '**', pathMatch: 'full', redirectTo: 'home'}
        ];

        @NgModule({
            imports: [RouterModule.forRoot(routes, { useHash: true })],
            exports: [RouterModule]
        })
        export class AppRoutingModule { }
        ```
    * In order to test it works, you can open the url ```http://localhost:4200/#/artist/123``` you will see how it shows the message **artist works!**
25. Perform changes in Cards Component to add links to artist so we can navigate to artist details page.

    In this exercise we are going to add a link to each artist to navigate to artist details page.
    Keep in mind that in Home Component there might be one or more artists per album or single but in Search Component each card is already an artist.

    The task we have to perform is to add a link to each author badge in Home Component while we are adding a link to the whole card in Search Component.

    Due to the behaviour of **a** tag you cannot nest a link within another link this is why we cannot reuse the same markup for both use cases but we need to still use cards to abstract this behaviour.
    
    #### Changing markup.
    * Open ```spoti-app/spotiapp/src/app/components/shared/cards/cards.component.html``` and replace its content by the code underneath.
        ```html
        <div class="card-columns m-5">
            <ng-container *ngFor="let item of items">
                <ng-container *ngIf="item.artists else single">
                    <div class="card">
                        <img class="card-img-top" [src]="item.images | noimage" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title card-title-ellipsis">{{ item.name }}</h5>
                            <p class="card-text" *ngIf="item.artists">
                                <span (click)="showArtist(artist)" *ngFor="let artist of item.artists" class="badge badge-primary puntero">{{artist.name}}</span>
                            </p>
                        </div>
                    </div>
                </ng-container>
                <ng-template #single>
                    <div (click)="showArtist(item)" class="card puntero">
                        <img class="card-img-top" [src]="item.images | noimage" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title card-title-ellipsis">{{ item.name }}</h5>
                        </div>
                    </div>
                </ng-template>
            </ng-container>
        </div>
        ```
    #### Adding method to component to redirect to details artist page on clicking over an artist.
    * Open ```spoti-app/spotiapp/src/app/components/shared/cards/cards.component.ts``` and after **ngOnInit** method add the next piece of code.
        ```typescript
        showArtist(item) {
            this.router.navigate(['/artist', item.id]);
        }
        ```
26. Implementing Artist Component.

    In this exercise we are going to implementing the Artist Component and it will contain a few sections on it.
    - Section 1
        - Artist picture
        - Artist name
        - Back button
    - Section 2
        - Table
            - Columns
                - Cover picture
                - Album name
                - Song name
                - Preview (Spotify widget to play music)
    
    In the route you might have seen that we are passing an id parameter, we need to get this value to fetch the details of the artist and the artist top tracks.

    #### Creating service methods to fetch artist details and artist top tracks.
    * Open ```https://developer.spotify.com/console/get-artist/``` and check how it works. **Artist Details**
    * Open ```https://developer.spotify.com/console/get-artist-top-tracks/``` and check how it works. **Artist Top Tracks**
    * Open ```spoti-app/spotiapp/src/app/services/spotify.service.ts``` and after **getArtists** add the following code.
        ```typescript
        getArtist(id) {
            return this
            .getQuery(`artists/${id}`);
        }

        getTopTracks(id) {
            return this
                .getQuery(`artists/${id}/top-tracks?country=NL`)
                .pipe(
                    map((response: any) => response.tracks)
                );
        }
        ```
    #### Use services in component
    * Open ```spoti-app/spotiapp/src/app/components/artist/artist.component.ts``` and replace its content by the following snippet of code.
        ```typescript
        import { Component, OnInit } from '@angular/core';
        import { ActivatedRoute } from '@angular/router';
        import { SpotifyService } from 'src/app/services/spotify.service';

        @Component({
            selector: 'app-artist',
            templateUrl: './artist.component.html',
            styles: []
        })
        export class ArtistComponent implements OnInit {

            artist: any = {};
            topTracks: any[] = [];
            loading: boolean = false;

            constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {}

            ngOnInit() {
                this.loading = true;
                this.activatedRoute
                    .params
                    .subscribe(params => {
                        const id = params.id;
                        this.getArtist(id);
                        this.getTopTracks(id);
                    });
            }

            getArtist(id) {
                this.loading = true;
                return this.spotifyService
                    .getArtist(id)
                    .subscribe(artist => {
                        this.artist = artist;
                        this.loading = false;
                    });
            }

            getTopTracks(id) {
                this.loading = true;
                return this.spotifyService
                    .getTopTracks(id)
                    .subscribe(topTracks => {
                        this.topTracks = topTracks;
                        this.loading = false;
                    });
            }
        }
        ```
    #### Setting markup
    * Open ```spoti-app/spotiapp/src/app/components/artist/artist.component.html``` and replace its content with the code underneath.
        ```html
        <app-loading *ngIf="loading"></app-loading>
        <div class="row" *ngIf="!loading">
            <div class="col-2">
                <img [src]="artist.images | noimage" alt="" class="img-thumbnail img-circle">
            </div>
            <div class="col">
                <h3>{{ artist.name }}</h3>
                <p>
                <a [href]="artist.external_urls.spotify" target="_blank">Go to artist page</a>
                </p>
            </div>
            <div class="col-4 text-right">
                <button class="btn btn-outline-danger" routerLink="search">Back</button>
            </div>
        </div>
        <div class="row m-5">
            <div class="col">
                <table class="table">
                <thead>
                    <tr>
                    <th>Cover</th>
                    <th>Album</th>
                    <th>Song</th>
                    <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let track of topTracks">
                    <td>
                        <img [src]="track.album.images | noimage" class="img-thumb">
                    </td>
                    <td>{{ track.album.name }}</td>
                    <td>{{ track.name }}</td>
                    <td class="text-center">
                        <!-- Add preview widget here -->
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        ````
27. Add Preview Spotify Widget.

    Spotify provides a widget to play a preview of a song. See https://developer.spotify.com/documentation/widgets/generate/play-button/

    * Open ```spoti-app/spotiapp/src/app/components/artist/artist.component.html``` and replace ```<!-- Add preview widget here -->``` by the example provided in Spotify. Use the compact version
        ```html
        <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        ```

    Now you will see a widget with a play button to play the music, but this is not what we need. We need to show a player for each track.

    * Open your browser developer tools and replace the src value of the iframe and replace it by ```https://open.spotify.com/embed/?uri={{ track.uri }}```

    #### What is happening now?
    There is a security problem on setting the src of and iframe using variables and it's not allowed by browsers.
    The solution to this problem is not sanitize our code to make sure that doesn't contains anything harmful.
    To make it work we have to create another pipe to perform this job.

    * Create a savedom pipe
        ```bash
        ng g p pipes/savedom --spec=false
        ```
    * Open ```spoti-app/spotiapp/src/app/pipes/savedom.pipe.ts``` and replace its content by the code underneath.
        ```typescript
        import { Pipe, PipeTransform } from '@angular/core';
        import { DomSanitizer } from '@angular/platform-browser';

        @Pipe({
            name: 'savedom'
        })
        export class SaveDOMPipe implements PipeTransform {

            constructor( private domSanitizer:DomSanitizer ){ }

            transform( value: string, url: string): any {
                return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
            }
        }
        ```

        This pipe gets a value and it's configured by a property, the value is the uri of the track and the url is the prefix url. What it does is to use a tool existing in angular that bypass the security setting this value as something that can be trust.

    #### Use the pipe to preview the play widget
    * Open ```spoti-app/spotiapp/src/app/components/artist/artist.component.html``` and replace ```<iframe src="https://open.spotify.com/embed/?uri={{ track.uri }}" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>``` by ```<iframe [src]="track.uri | savedom:'https://open.spotify.com/embed/?uri='" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>```

28. BONUS EXERCISES.

    1. Show a Bootstrap 4 alert at the top of the page, just below navigation topbar, if something goes wrong on fetching data from server.
    2. In Search Component:
        - Do not send the request to server if query has less than three characters.
        - Add some delay before sending the request to server letting the user to type something with sense.