
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ExploreMain from './pages/Explore/ExploreMain';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path= "/">
        <Home></Home>
        </Route>
        <Route path="/explore">
          <ExploreMain></ExploreMain>
        </Route>
      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
