# Storybook-react

> Easily create react component libraries with demos and github pages support

## Features

- Compile into cjs and js
- Create simple demos
- Github pages support

## Structure

`stories/index.stories.js` this file contains the stories

`src` this folder should contain your component and their demos

`package.json` contains the two important lines that should have the name of your main component

```json
{
  "main": "lib/Test.js",
  "module": "lib/Test.js"
}
```

## Scripts

`start` Start the development server

`build` Build everything

`predeploy` Build before deploy

`deploy` deploy to github pages
