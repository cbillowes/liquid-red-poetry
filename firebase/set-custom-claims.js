const admin = require("firebase-admin");
const serviceAccount = require("./keys/firebase-service-account.json");
const uid = process.argv[2];

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

admin
  .auth()
  .setCustomUserClaims(uid, { admin: true })
  .then(function () {
    console.log("Successfully set admin claim for user:", uid);
    process.exit();
  })
  .catch(function (error) {
    console.log(error);
    process.exit(1);
  });
