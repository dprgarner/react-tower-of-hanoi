# react-redux-boilerplate
React with ES6, Karma, Webpack dev server, etc.

------
To start the Webpack auto-refreshing dev server:
```
./start [--open] <port>
```
To start the dev server and also open the browser at the current URL, add the `--open` option.

------
To run the tests once:
```
npm test
```

To run the tests in watch test mode, add the `--watch` argument or run the watchtest script, i.e.:
```
npm test -- --watch
npm test -- -w
npm run watchtest
```

The tests will run every file ending with `spec.js` or `spec.jsx` in `./src`.
