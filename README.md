# react-redux-boilerplate
React with ES6, Karma, Webpack dev server, etc.

------
To start the Webpack auto-refreshing dev server:
```
./start [--open] <port>
```
To start the dev server and also open the browser at the current URL, add the
`--open` option.

The auto-refreshing webpack server can sometimes miss file change events when
using vim. To fix this, change the vim setting `:set backupcopy=yes`.
(See <https://github.com/webpack/webpack/issues/781#issuecomment-95523711>)

------
To run the tests once:
```
npm test
```

To run the tests in watch test mode, add the `--watch` argument or run the
watchtest script, i.e.:
```
npm test -- --watch
npm test -- -w
npm run watchtest
```

The tests will run every file ending with `spec.js` or `spec.jsx` in `./src`.
