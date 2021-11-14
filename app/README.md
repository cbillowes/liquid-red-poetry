# Web Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### Node

```bash
# Be sure to be working in the app directory relative to root.
cd app/

# If you are using nvm change to Node 16.
# Alternatively, install Node 16.
nvm use 16
```

#### Yarn Migration

- [Step by step Yarn migration][step-by-step-yarn-migration].
- [Take a look at everything that needs to be ignored by git][yarn-ignore-files].

```bash
# Upgrade Yarn
## Update the global yarn version to latest v1
npm install -g yarn

## Enable v2 in the project directory
yarn set version berry

## Add nodeLinker: node-modules in your .yarnrc.yml file
## Commit the changes so far (yarn-X.Y.Z.js, .yarnrc.yml, ...)

## Migrate the lockfile
yarn install
```

### Scripts
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

### Google Firebase

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
[step-by-step-yarn-migration]: https://yarnpkg.com/getting-started/migration#why-should-you-migrate
[yarn-ignore-files]: https://yarnpkg.com/getting-started/migration#why-should-you-migrate
