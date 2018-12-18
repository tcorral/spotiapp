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


