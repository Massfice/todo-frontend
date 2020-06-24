# todo-frontend

## Overview

###### General
This is front application for [todo application](https://github.com/Massfice/todo-backend). It uses also [my auth server](https://github.com/Massfice/meet-your-elf-auth-diploma#solution). It lets user perform actions agains both of mentioned servers: authorizing, fetching, creating, updating and deleting data using user interface. It was written in TypeScript and React + Redux.

###### Tech Stack:
- React + Redux
- TypeScript / Javascript
- JSX
- Axios
- Yarn
- Git

## Solution

###### Access Control
Application is divided into two main section. Each section is controlled by Browser Router. We have unprotected section that contains register and login page. And we have protected section that contains *todo* list and panels for creating, editing and deleting items from list (editing and deleting exist on common component that is available by clicking *Edit*).

###### Login and Register
Login and register are performed against my own auth server. Register sends post request to *register/json* endpoint. Login sends request post request to *token/json* endpoint, then exchange  this token by performing get request to the same endpoint. Then using this same token to fetch all *todo* list from *todo-backend*. This solution let us avoid performing request each time when we want to render *todo* list. It's just simple stored in redux store.

###### Creating, Deleting, Updating and Toggling
Creating, updating, deleting and toggling *todo* we perform by single request to *todo-backend*. Server returns *todo* object that could be simple dispatching into redux store. This solution let us avoid performing getting all *todo* list right after performing CRUD (or Toggle) operation and our state is always up to date.

###### Session Storage
We keep actual state into session storage. Each time when we perform operation on store, we save new state in session storage. This solution let us keep data, even if we refresh page. Additionally it's a security solution. We don't keep data in local storage that is persistant, even when browser is closed. Only one minus. When we close all tabs, we lose state.

###### Broadcast Channels
This application uses Broadcast Channels provided by pure Javascript. This application uses Broadcast Channels provided by pure Javascript. There's two reasons:
- Session storage is individual for each browser tabs, but using broadcast channels, we can *ask* another tab for sharing actual state with newly created tab. New tab sends message into *request state channel* and listen for response, then existing tab sends response into *response state channel*. This solution requires using promise, so *index.tsx* was wrapped into promise.
- We use two additional middlewares. First middleware transmits action for dispatch using Broadcast Channel and second retrieve this also using Broadcast Channel and dispatching. This solution let us posses the same state on each browser tab, regardless on tab where we perform actions. If we made login on one tab, we would be logged on another aswell, etc.

###### Constants and Types
I use several types defined in types folder under *src* folder. I use also *constants.tsx* defined in the same folder. That allows me change code in one place and affecting several another. It makes mantaining, updating, deleting and creating features easier. You can e.g. change endpoints using by this application.

###### End Words
I'm Adrian Larysz. To run this project locally:
- `git clone https://github.com/Massfice/todo-frontend`
- `yarn istall`
- `yarn start`