
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Purchase from './pages/Purchase/Purchase';
import Navigation from './pages/Shared/Navigation/Navigation';
import Footer from './pages/Shared/Footer/Footer';
import Explore from './pages/Explore/Explore';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <Route exact path= "/">
        <Home></Home>
        </Route>
        <Route path="/explore">
          <Explore></Explore>
        </Route>
        <Route path="/purchase/:id">
          <Purchase></Purchase>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
