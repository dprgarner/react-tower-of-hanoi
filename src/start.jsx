import {render} from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import 'file?name=index.html!./index.html';
import 'file?name=style.css!./style.css';

const App = () => (
  <div>{'Hello world!'}</div>
)
const reducer = (state, action) => state;

window.onload = () => {
  let store = createStore(reducer);

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementsByTagName('main')[0]
  );
};
