# User-Database
A node.JS and Angular application that just keeps a list of users in a JSON document, and allows you to add users

## Node
The node application is located in the main folder, created by express

To start the server on your machine, open the command line in the main folder and run:
```
npm start
```
### app.js
There are comments explaining details of each section in the code, but this file houses the server setup on localhost:3000, and directs requests to the appropriate location
### routes
The routes folder contains the different routes for requests. 
The index request was the original Express landing page, which can probably be deleted
The users request can probably be deleted, but I'm not sure if it came from Express or if it was added during testing
The api request is the main route. This is the route that conatins the read and write functionality for the JSON file
The testData.JSON file is held here for now, but should probably be moved

## Angular
The Angular app is all contained in the sub folder "AngTest", created with AngularCLI
Not much was changed in the main Angular folder, the src/app folder contains the majority of the written code

To start the angular application on your machine, open the command line in the AngTest folder and run:
```
ng serve
```
### app.component.html
This file loads in the datareader and datawriter modules, along with setup for passing the datareader.getTheData function to allow it to be called from a datawriter on event
### datareader
This folder contains the functionality and output template for the users to be read from the server
#### datareader.component.html
This uses ngFor to loop through all the users and output as p elements. Should probably be changed to output as li elements
#### datareader.component.ts
There are comments explaining details, but this contains the get request and outputs the data to theData, which is used in the html 

### datawriter
This folder contains the functionality and form template for sending new users to the server to be added to the JSON document
#### datawriter.component.html
The form is a formGroup, that passes the data from the form to the JS code in the ts file on submit
#### datawriter.component.ts
There are comments explaining details, but this contains the post request to the server, with the user name to be added
This also contains an event emitter that will cause the get request to be triggered again on submit, so that the list can be updated without refreshing the page
