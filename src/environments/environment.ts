// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//Se agrega la variable firestore 
export const environment = {
  production: false,
  firestore: {
    apiKey: "AIzaSyAwXIOnI-44uhqzsptfZpWYoA5dU6cnRJo",
    authDomain: "gestion-gastos-f8463.firebaseapp.com",
    projectId: "gestion-gastos-f8463",
    storageBucket: "gestion-gastos-f8463.appspot.com",
    messagingSenderId: "951502969709",
    appId: "1:951502969709:web:bf823d330f673c861b5864",
    measurementId: "G-B19BM98R2M"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
