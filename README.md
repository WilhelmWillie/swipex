# SwipeX

Mobile application that takes a literal approach to "tinder for X". Users input what "X" they want to swipe for (ex: cars, dogs, cats). The app will then pull cards from Google Images and allow the user to like/dislike results.

**Warning/Note: This is an old project I stopped working on in 2017. However, I've decided to revisit and revitalize it. Currently, a lot of features are still a heavy WIP and the interface is super scrappy. Come back later as I flesh out this app and improve it!**

## Screenshots
![SwipeX Intro](screenshots/swipex_intro.jpg "SwipeX Intro")
![SwipeX Swipe](screenshots/swipex_swipe.jpg "SwipeX Swipe")

## Getting started

- Clone this repository
- `cd swipex`
- `npm install` to install the application's dependencies
- Get Google Images API keys and create your own `config/ApiKeys.js` file. See `ApiKeys_Example.js` for an example of how to structure this file

Choose one of the following:

- `npm run ios` to run this app in the iOS simulator 
- `npm run android` to run this app in an Android simulator
- `npm start` to run this app via [Expo](http://expo.io)