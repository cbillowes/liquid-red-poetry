# Liquid Red

**Poetry** - A place for beautifully written text doubling as a deep-dive tutorial to creating a React web application integrated with Firebase leveraging Git and Node.js within the stack.

## Stack

- [Node][node]
- [Git][git]
- [Yarn][yarn]
- [Prettier][prettier]
- [React][react]
- [React Router][react-router]
- [React Hook Form][react-hook-form]
- [Tailwind CSS][tailwindcss]
- [Node.js][nodejs]
- [Firebase][firebase]

## Getting Started

### Node
A JavaScript runtime built on Chrome's V8 JavaScript engine.

- [Download][node] and install Node 16.13.0 LTS (at the time of writing).
- [Install][nvm] the Node Version Manager if you can so that you can manage different Node versions.

### Git
Version control

- [Download][git] and install Git.
- [Set up][git-set-up] your repository from scratch.
- Push your repository to a remote solution like [GitHub][github].
- Create an ignore file.

  ```bash
  echo > .gitignore
  ```

  ```
  # Ignore dependencies:
  /**/*node_modules
  ```

### Yarn
Dependency manager

- We will be using Yarn [instead][yarn-vs-npm] on npm to manage our project dependencies.
- Install yarn globally via npm and use `yarn add` instead of `npm install` when adding dependencies to your projects.

  ```bash
  npm install -g yarn
  ```

### Prettier
Code formatter

- Install and configure
  ```bash
  yarn add --dev --exact prettier
  echo {}> .prettierrc.json
  echo > .prettierignore
  ```

- Update files to ignore

  ```
  # Ignore dependencies:
  **/node_modules
  ```

### React
Web framework

- Install the React Developer Tools [extension][react-developer-tools] for your browser.
  - [Chrome][react-developer-tools-chrome]
  - [Firefox][react-developer-tools-firefox]

- Create the React application using the CRA tool chain.
  At the time of writing, 17.0.2 was installed.

  ```bash
  npx create-react-app app
  ```

  - Fetch the tool
  - Create the directory files
  - Initialize a repository
  - Install required tools and packages

- For the app to work within the working directory we need to move a few files around.

  ```bash
  # Move to working directory
  mv ./app/.gitignore .

  # Remove the git repository created earlier
  rm -rf ./app/.git
  ```

  - Update the name of the package in `package.json` file to something less generic than `app`.
  - Update `.gitignore` to ignore `**/node_modules` and `.env`.
  - Remove the `eject` script from the package.json file.

- Run the application using the `start` script in package.json.

  ```bash
  npm start
  ```

### React Router
Declarative routing for React

```bash
yarn add react-router-dom@5.3.0
```

### React Hook Format
React Hooks for form validation

[Install][react-hook-form] and configure

```bash
yarn add react-hook-form@7.18.0
```

### Craco

Configuration override

[Install][craco]

```bash
yarn add @craco/craco
```

```diff
{
  // ...
  "scripts": {
-    "start": "react-scripts start",
-    "build": "react-scripts build",
-    "test": "react-scripts test",
+    "start": "craco start",
+    "build": "craco build",
+    "test": "craco test"
  },
  // ...
}
```

### Tailwind CSS
A utility-first CSS framework for rapid UI development

[Install][tailwind-install] Tailwind CSS.

```bash
yarn add tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 --dev
```

Configure `tailwindcss` and `autoprefixer` as PostCSS plugins:

```js
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

Create the configuration file

```bash
npx tailwindcss-cli@latest init
```

Remove unused styles in production

```diff
-   purge: [],
+   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
```

### Node.js

- [Download][nodejs] and install the CLI (v 16.13.0) which includes npm 8.1.0. If you are using `nvm` then and switch to use it.
  ```bash
  nvm install 16 && nvm use 16
  ```

### Firebase

- Go to the [console][firebase-console]

- Create a new Firebase project
  - Enter a name (Google will help you keep it unique)
  - Choose to add Google Analytics (you can disable it for now)

- Add Firebase to your web app
  - Project Settings (Gear next to Project Overview) > Your apps > Click on web icon
  - Give an app nickname
  - Don't need hosting just yet
  - Click on the register app button
  - Add the generated config to your [environment variables][react-env], `.env` file in your React web application

    ```
    REACT_APP_API_KEY=<key>
    REACT_APP_AUTH_DOMAIN=<domain>
    REACT_APP_PROJECT_ID=<project-id>
    REACT_APP_STORAGE_BUCKET=<storage-bucket>
    REACT_APP_MESSAGING_SENDER_ID=<messaging-sender-id>
    ```

- CLI tools and project dependencies

  ```bash
  npm install -g firebase-tools
  # Authenticates using your Google account through the browser
  firebase login
  # Test if it worked by querying your projects
  firebase projects:list

  # Install firebase dependencies in app
  cd app
  yarn install firebase@9.2.0
  ```

- Use these [guides][firebase-dev-guides] for accessing and developing with Firebase services

- `git show 38759c8` to clean up the React project and prepare files for Firebase integration.

#### Authentication

- Set up email/password sign-in method in the [console][firebase-console].

#### Firestore

Provision your Cloud Firestore database.
- Firestore Database > Create database > Start in **production mode**.
- Choose your Cloud Firestore location (you cannot change this later!)
- Initialize Firebase in app

  ```bash
  cd app
  firebase init
  # press space and enter for Firestore
  # use an existing project
  # select your project
  # accept default files:
  #   firestore.rules
  #   firestore.indexes.json
  ```

- Update rules to allow read, writes and updates for a given user.

  ```
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /users/{userId} {
        allow read, write, update: if request.auth.uid == userId;
      }
    }
  }
  ```

- Deploy rules to Google Firebase. _(`deploy:firestore-rules` script exists in package.json)_

  ```bash
  firebase deploy --only firestore:rules
  # or
  npm run deploy:firestore-rules
  ```

#### Storage

- Initialize Firebase in app again

  ```bash
  cd app
  firebase init
  # press space and enter for Storage
  # use an existing project
  # select your project
  # accept default files:
  #   storage.rules
  ```

- Update rules to allow read and write

  ```
  rules_version = '2';
  service firebase.storage {
    match /b/{bucket}/o {
      match /users/{userId}/{fileName} {
        allow read: if request.auth.uid == userId;
        allow write: if request.auth.uid == userId
                    && request.resource.size < 5 * 1024 * 1024
                    && request.resource.contentType.matches('image/.*')
      }
    }
  }
  ```

- Deploy rules to Google Firebase. _(`deploy:storage-rules` script exists in package.json)_

  ```bash
  firebase deploy --only storage:rules
  # or
  npm run deploy:storage-rules
  ```

---

[node]: https://nodejs.org/
[git]: https://git-scm.com/downloads
[git-set-up]: https://www.atlassian.com/git/tutorials/setting-up-a-repository
[github]: https://github.com/

[yarn]: https://yarnpkg.com/getting-started/install
[yarn-vs-npm]: https://waverleysoftware.com/blog/yarn-vs-npm/

[prettier]: https://prettier.io/

[react]: https://reactjs.org/docs/create-a-new-react-app.html
[react-developer-tools]: https://reactjs.org/blog/2019/08/15/new-react-devtools.html
[react-developer-tools-chrome]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
[react-developer-tools-firefox]: https://addons.mozilla.org/en-GB/firefox/addon/react-devtools/
[react-env]: https://create-react-app.dev/docs/adding-custom-environment-variables/

[react-router]: https://reactrouter.com/web/guides/quick-start

[react-hook-form]: https://react-hook-form.com/

[craco]: https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation

[tailwindcss]: https://tailwindcss.com/docs

[nodejs]: https://nodejs.org/

[firebase]: https://firebase.google.com/
[firebase-console]: https://console.firebase.google.com/
[firebase-dev-guides]: https://firebase.google.com/docs/web/setup
