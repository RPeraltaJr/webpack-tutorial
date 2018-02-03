## Create a Package.json file
`npm init`

## Install Webpack
`npm install webpack --save-dev`

## Setup your code and then run Webpack
`webpack assets/js/main.js assets/js/bundle.js`
###### Use only [bundle.js] on your [index.html] file

## Create a Webpack.config.js file

## Using Babel Loader
* Install babel-core and babel-loader via npm
`npm install babel-core babel-loader babel-preset-es2015 --save-dev`
* Install any presets we will be using to perform transformations
* Configure webpack.config to tell webpack to use babel to transform our code

## Using CSS Loaders
* Use CSS loaders to load in only the styles we need, into different parts of our application
`npm install style-loader css-loader --save-dev`
* CSS becomes much more modular and easier to manage
* 2 different loader - css-loader, style-loader
* CSS-loader, loads the css into our JS file
* Style-loader adds our css into the DOM