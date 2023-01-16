import Header from 'components/Header';
import CartFeature from 'features/Cart';
import HomePage from 'features/HomePage';
import ProductFeature from 'features/Product';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route path="/" component={HomePage} exact/>
        <Route path="/todos" component={TodoFeature} exact />
        <Route path="/counter" component={CounterFeature} exact />
        <Route path="/album" component={AlbumFeature} exact />
        <Route path="/products" component={ProductFeature} exact />
        <Route path="/cart" component={CartFeature} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
