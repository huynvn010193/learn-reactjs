// import AlbumFeature from "./features/Album";
import { Route } from "react-router-dom";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";

function App() {
  return (
    <div className="App">
      Home Page
      {/* <AlbumFeature/> */}
      <Route path="/todos" component={TodoFeature} />
      <Route path="/album" component={AlbumFeature} />
    </div>
  );
}

export default App;
