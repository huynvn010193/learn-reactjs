// import AlbumFeature from "./features/Album";
import { useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import NotFound from './components/NotFound';
import productApi from './api/productApi';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log('productList', productList);
    };
    fetchProducts();
  }, []);
  return (
    <div className="App">
      Home Page
      <h3>NavLink</h3>
      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>
      <p>
        <NavLink to="/album">Albums</NavLink>
      </p>
      <Switch>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
