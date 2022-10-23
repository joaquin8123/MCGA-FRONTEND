import React from 'react';
import Productos from './components/Productos';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from '../src/redux/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
          <div className="container mt-5">
              <Switch>
                  <Route exact path="/products" component={Productos} />
              </Switch>
          </div>
      </Provider>
    </Router>
  );
}

export default App;
