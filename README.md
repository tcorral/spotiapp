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






