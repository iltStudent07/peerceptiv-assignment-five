# Peerceptiv Phase 2: Assignment 2 | React App Architecture & Patterns

The purpose of this repo is to showcase my skills across the full React skill set - from comonent fundamentals through advanced patterns.
This project is a small multi-view React+TypeScript app that uses components, hooks, routing, data fetching, Context API, a custom hook and component testing. 

## Setup Steps

To work with this app and run it on your device, follow these steps:

1. Either clone or fork this repo into the code editor of your choice. (I personally use and reccommend Microsoft VS Code)
  
2. If you dont have Node.js on your device you will need to go to https://nodejs.org and install it on your machine.

3. Once Node.js is on your machine you will use the Node Package Manager(NPM) to install dependencies needed to run the app by opeing a terminal and typing:
   `npm install`
   
4. From there you can type in the terminal: `npm run dev` to run the app in a dev server or you can type: `npm run build` and then `npm run preview` to build a production build of the app and preview it.

## App Testing

There are test files in this project that let you test the rendering of certain components in the app. If you would like to run these tests yourself, follow steps 1-3 up above and then in a terminal type: `npm run test:run`

## Architecture Rationale

**My Component Hierarchy:**
The project I went with is a mock online shop where a user can browse a list of game systems, view indivual pages that that show the different products price/info and 
a button to add the item to a virtual shopping cart. In the cart the user can view the items in the cart, and fill out a form that mimics sending a purchase receipt to a users email.
The different "pages" that the user can view I put in a pages folder. I made a custom hook named useLocalStorage that went in a hooks folder. Test files went in a test folder and components went into the component folder. I decided to make components for different parts of the site that needed to be rendered no matter what page a user was viewing such as the Footer and Header components this allowed me to write the code for them once and just have the App file call them in the main App function. I also put the Receipt Form into its own component. This would allow me to use the form in multiple places in the future as the App scales.


**State Managment Decisions:**
I went with Context for my main state management. I used CartContext to keep track of what items and and how many of them are in the App's cart. State lives in the CartContext file and this allowed different componenets access to that info by using `useCart()` without having to do prop drilling. I found this was the best method as this easily allowed me to use my custom hook `useLocalStorage()` to store what is in the cart and allow it to persist beyond page refreshes and rerenders.


**Custom Hooks**
The main custom hook I used was `useLocalStorage`. This hook allows for different states to be stored in browser memory which allows this info to persist beyond re-renders and page refreshes. I used this mostly for storing Cart Context but it can be used for other things in the future as the app scales. For instance it could be used to store user settings such as app theme settings.


**Routes and Data Fetching**
I had a Route leading to each main page (Homepage, Products and Cart), a route that leads to a 404 Not Found page to handle errors or if a url comes up that doesnt lead to one of my programmed routes. I also had a dynamic route that leads to a different page for each item in the Product list by reading the id in a local json file that corresponds to the product link that the user clicked on. It gets this data by using `useEffect()` and a `fetch` request to get info from gameSystems.json.


## Repo Author

Josh Gaudet/iltStudent07
