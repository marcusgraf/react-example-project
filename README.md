# React Example Project

A awesome react example project

## Requirements

* [node](https://nodejs.org/en/) >= 6.0
* [npm](https://www.npmjs.com/) >= 3.0


## Getting Started

**1. Install all of the dependencies:**

```bash
yarn
```

**2. Start to run it:**

```bash
yarn start:production    # Building bundle and running production server
```

Now the app should be running at [http://localhost:8080/](http://localhost:8080/)


## NPM Script Commands

I use [better-npm-run](https://github.com/benoror/better-npm-run) to manage the scripts in a better way, which also provides the compatibility of cross-platform. All of the scripts are listed as following:

`yarn <script>`|Description
------------------|-----------
`start`|Run your app on the development server at `localhost:3000`. HMR will be enabled.
`start:production`|Bundle files to `./public/assets` and run it on the production server at `localhost:8080`.
`start:prod`|Run your app on the production server only at `localhost:8080`.
`build`|Remove the previous bundled files and bundle it to `./public/assets`.
`test`|Run testing once (with code coverage reports).
`test:watch`|Run testing on every test file change.
`clean:all`|Remove the client/server bundled stuff and the coverage report.
`clean:build`|Remove the `./public/assets` folder to clean the client bundled files.
`clean:test`|Remove the `./coverage` folder to clean the code coverage report.

## ToDo

- Add empty state for movies
- Improve Search Feedback
