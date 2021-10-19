import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Components/Create';
import ProductDetails from './Components/ProductDetails';

import NotFound from './Components/NotFound';
import AddProuct from './Components/AddProduct';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <AddProuct />
            </Route>
            <Route path="/product/:id">
              <ProductDetails/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

