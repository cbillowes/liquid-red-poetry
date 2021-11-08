# Web Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### React Scripts

```bash
# Be sure to be working in the app directory relative to root.
cd app/

# If you are using nvm change to Node 16.
# Alternatively, install Node 16.
nvm use 16
```

```bash
# Development mode: http://localhost:3000.
yarn start

# Launches the test runner in interactive watch mode.
# https://facebook.github.io/create-react-app/docs/running-tests
yarn test

# Builds the app for production to the `build` directory.
# It correctly bundles React in production mode and optimizes
# for best performance.

# The build is minified and the filenames include the hashes.
# https://facebook.github.io/create-react-app/docs/deployment
yarn build
```

### Google Firebase Scripts

``` bash
# Uploads the Firestore rules to Google Firebase for the authenticated account.
yarn run deploy:firestore-rules

# Uploads the Storage rules to Google Firebase for the authenticated account.
yarn run deploy:storage-rules
```

## Google Firebase
Google Firebase implementation is using Node Web Version 9 (modular).

- [Upload files wih Cloud Storage on Web][firebase-progress-updates]

---

## Resources

- [React][react]
- [Create React App documentation][cra-docs]
- [Code Splitting][code-splitting]
- [Analyzing the Bundle Size][analyzing-bundle-size]
- [Progressive Web App][progressive-web-app]
- [Advanced configuration][advanced-configuration]
- [Deployment][deployment]
- [Fails to minify][error-fails-to-minify]

---

[firebase-progress-updates]: https://firebase.google.com/docs/storage/web/upload-files
[react]: https://reactjs.org/
[cra-docs]: https://facebook.github.io/create-react-app/docs/getting-started
[code-splitting]: https://facebook.github.io/create-react-app/docs/code-splitting
[analyzing-bundle-size]: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size
[progressive-web-app]: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
[advanced-configuration]: https://facebook.github.io/create-react-app/docs/advanced-configuration
[deployment]: https://facebook.github.io/create-react-app/docs/deployment
[error-fails-to-minify]: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
