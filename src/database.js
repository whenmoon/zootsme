  // Set the configuration for your app
  // TODO: Replace with your project's config object

import * as firebase from 'firebase';


  var config = {
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  module.exports = database;