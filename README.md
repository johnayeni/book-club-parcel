# KORAPAY BOOK CLUB FE

A web app for the korapay front engineering coding test.

## Requirements

- Node.js (v12 or higher recommended)

## Local development setup

- Install dependencies `npm install`.
- Start app `npm start`.

## Production Build

- Install dependencies `npm install`.
- Build project `npm run build`.
- Install serve `npm install -g serve`
- Run production build `serve dist`.

## Assumptions

- When a search is run, I assumed that search results should only be shown on the carousel books section but the all books and recently added sections should remain the same based on what those titles meant

## Requirements not met

- The search bar results UI does not match the prototype. I used the native input datalist element which cannot be styled.

## How submission can be improved

- The styling for different breakpoints e.g tablets, small desktops e.t.c can be improved as this submission only covers two break points
- The main `app.js` file can be refactored into further separate files to increase readability
