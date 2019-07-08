# Zoots Me

Zoots Me allows users to have their outfits rated! Take a snap and and while you're waiting for people to rate it, rate other people's.

Inherited as a legacy project and as a team of two, we re-built the Firebase back-end using Express and MongoDB so we could write tests using Jest and SuperTest. We also wrote tests for the front-end using Jest and Enzyme.

This project is a work in progress.

Back-end repo is [here](https://github.com/whenmoon/zoots-me-server)


## Prerequisites

Android studio

Android virtual device [configured with AVD](https://developer.android.com/studio/run/managing-avds) Manager

Firebase account

Firebase project 

Firebase authentication with sign-in method configured and at least one user

Firebase cloud storage

Firebase registered app



## Installation

```
git clone https://github.com/whenmoon/zootsme.git

npm install

npm start

Copy you Firebase app's configuration details from Project Overview/settings to src/config/config.js

Launch your AVD using Android studio

Using Metro Bundler set to Local, select 'run on Android device/emulator'
```

## Tests

`npm test`

## Tech Stack

* [React Native](https://facebook.github.io/react-native/)
* [Enzyme](https://airbnb.io/enzyme/)
* [Firebase](https://firebase.google.com/)
