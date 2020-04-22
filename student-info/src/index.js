import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import StudentDetails from './components/StudentDetails';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import store from './store/index'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <HashRouter>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/student-details" component={StudentDetails} />
        </div>
      </HashRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
