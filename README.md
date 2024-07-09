
============================FRONTEND==================================

To start the project,
 -1 Open the project on vs Code or any code editor
 -2 in the  terminal run > cd frontend / to get in the frontend part of the project
 -3 run > npm install / to install all dependencies in package.json
 -4 run > npm start / to start the project !

------PAGES------
In the project we have 3 main pages 
1-home page
   The home page is for listing available todo items and also for creating new todo elemets
   
2-Update page
    The update page is set for updating a specific todo element. You can reach here by clicking to the 
    update icon of each todo listed item in the home page

3- View Page
     The view page is for viewing detail of todo elements.



------ STORES-----
 This project uses redux as store management. In the store folder, we have 3 main files : 
   1- type.js for all type 
   2- reducer.js for updating the store,
   3- actions.js for all functions that are used in the pages and components



----COMPONENTS-------
   Components are made of small reusable pieces reused in many pages,


========================================   BACKEND  =====================================

To start the project : 

 -1 Open the project on vs Code or any code editor
 -2 in the  terminal run > cd backend / to get in the backend part of the project
 -3 run > npm install / to install all dependencies 
 -4 run > node app.js / to start the project !

------  DATABASE -----

tbe project is made with an online database (MONGO DB)
You need to connnect to your database !

----MODELS--------
/models/todo.js
here is the model set for all database interaction.

------ROUTES-----
/routes/todo.jss
All routes for operating any action with the database are set here

--------APP------
The main file for the backend is the app.js . Working on local server in port 3000


 


   
   
