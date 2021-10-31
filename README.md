# Liquid Red

Poetry - A place for the beautifully written

## Stack

- [Git][git]
- [React][react]
- [Node.js][nodejs]
- [Firebase][firebase]

## Getting Started

### Git

- [Download][git] and install Git.
- [Set up][git-set-up] your repository from scratch.
- Push your repository to a remote solution like [GitHub][github].

### React

- Install the React Developer Tools [extension][react-developer-tools] for your browser.
  - [Chrome][react-developer-tools-chrome]
  - [Firefox][react-developer-tools-firefox]

- Create the React application using the CRA tool chain.

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
  - Update `.gitignore` to ignore `/**/*/node_modules` and `.env`.

### Node.js

- [Download][nodejs] and install the CLI (v 16.13.0) which includes npm 8.1.0. If you are using `nvm` then and switch to use it.
  ```bash
  nvm install 16 && nvm use 16
  ```
-

### Firebase

- Go to the [console][firebase-console]
- Add a project
  - Enter a name
  -



---

[git]: https://git-scm.com/downloads
[git-set-up]: https://www.atlassian.com/git/tutorials/setting-up-a-repository
[github]: https://github.com/
[react]: https://reactjs.org/docs/create-a-new-react-app.html
[react-developer-tools]: https://reactjs.org/blog/2019/08/15/new-react-devtools.html
[react-developer-tools-chrome]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
[react-developer-tools-firefox]: https://addons.mozilla.org/en-GB/firefox/addon/react-devtools/
[nodejs]: https://nodejs.org/
[firebase]: https://firebase.google.com/
[firebase-console]: https://console.firebase.google.com/
