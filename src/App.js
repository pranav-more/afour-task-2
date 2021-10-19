import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import NotFound from './Components/NotFound';
import AddProuct from './Components/AddProduct';
import EditProduct from './Components/EditProduct';

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
            <Route exact path="/create">
              <AddProuct />
            </Route>
            <Route exact path="/product/:id">
              <ProductDetails/>
            </Route>
            <Route exact path="/product/edit/:id">
              <EditProduct/>
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

