// Create this snippet in your browser console
// and execute it from there once you have a valid
// JWT token to access Firebase.

// Pass in the key when you execute the snippet by running
// getToken("<key>"); in the browser console.

// To get that key, navigate the following path in your console:
// Application > IndexedDB > firebaseLocalStorageDB > firebaseLocalStorage.
// Copy and use "firebase:authUser:<api-key>:<app-name>" key.

function getToken(key) {
  let db;
  let request = indexedDB.open("firebaseLocalStorageDb");

  request.onerror = function (event) {
    console.log("error");
  };

  request.onsuccess = function (event) {
    db = event.target.result;
    db
      .transaction("firebaseLocalStorage")
      .objectStore("firebaseLocalStorage")
      .get(key).onsuccess = function (event) {
      let data = event.target.result;
      console.log(data);
      console.log(data.value.stsTokenManager.accessToken);
      db.close();
    };
  };
}
