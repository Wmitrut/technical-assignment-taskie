
<p align="center">
    <img src="logo.png" style="margin: 10px auto">
</p>

# Taskie - A simple Drag-N-Drop React Kanban

Taskie is a simple drag-n-drop kanban that enables the user to do some things like:

- Be able to create tickets on the board. ✅
- Be able to move tickets between the various columns in an interactive way, persisting across page refreshes. ✅
- Be able to share a direct link to the ticket. ✅

It also let:

- Create your own columns, as many as you want ✅
- Move Columns and organizing it the way you want ✅
- Delete tasks ✅
- Delete Columns ✅

### Minimum Requirements

To Run this project you will have to:

- Have the most recent node version (I have used node v14.17.0 / npm v6.14.13);
- Have [JSON Server](https://github.com/typicode/json-server) installed on your machine;
- Have [Create React App](https://create-react-app.dev/) as well;
- Use Yarn to install packages;

### Runnign

 - After cloning, enter in the project and run `yarn`, it will install all packages needed;
 - Check the `.env` file, it is setting the right port it should be making requests on frontend;

 > I Commited my .env intentionally
 
 - To start it do `yarn serve`, this will do 2 things:
    - Start the JSON Server API up on `localhost:8000`, feel free to edit that on `package.json` and put in any port you want;
    - Start the React App in the `localhost:3000` - it will open automatically in the browser;
    - Be sure to not serve both on the same ports or this will fail;

All the data is comming from `data/db.json`, so JSON Server simulates all the requests like GET, POST and DELETE

> Be sure that the port in the .env and on package.json be the same as it is how the JSON server  and react will know how to proceed - without that, any data will not persists between refreshes;

 ### Future things to be improved:

 - Center all the requests into an `useReducer`;
 - Improve the sharing function by implementing [Params API](https://v5.reactrouter.com/web/example/url-params) instead of parsing;
 - Add [Formik](https://formik.org/docs/api/useFormik) to improve form in general, specially form validation and consistency;
 - Support Markdown on task descriptions;
 - Add Cypress for end-to-end tests;
 - Dark/Light mode switch;
 - Login/Session management with a proper backend API;

-----
-----
-----


# Technical assignment front-end engineer
Create a minimal Kanban board on which you can create, view and move tickets between columns.

Your task is to:

- be able to create tickets on the board.
- be able to move tickets between the various columns in an interactive way, persisting across page refreshes.
- be able to share a direct link to the ticket.

You are free to use the tools you prefer, however, we strongly suggest you keep the hard skills of the job offer in mind.

**Minimal requirements**

The three pillars of front-end development are HTML, CSS and JavaScript. We would like to see you know how to use them for the right job.
* Use React
* Pay attention to semantics: any HTML might work, but choosing the right tags show you care.
* Show us you know how to create a modern user interface using your favourite styling solution.
* Interact with an API. [JSON Server](https://github.com/typicode/json-server) can be used to add a fake REST API or you can decide to build your own.

**Timing**

You have one week to complete the assignment. You decide yourself how much time and effort you invest in it, but quality(!) and a reasonable delivery time are always highly appreciated. 
Please send us an email when you think the assignment is ready for review. Please mention your name, Github username, and a link to what we need to review.
