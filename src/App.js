
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Purchase from './pages/Purchase/Purchase';
import Navigation from './pages/Shared/Navigation/Navigation';
import Footer from './pages/Shared/Footer/Footer';
import Explore from './pages/Explore/Explore';
import Login from './pages/Shared/Login/Login';
import Register from './pages/Shared/Login/Register';
import Dashboard from './pages/Dashboard/Dashboard'
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ExploreMain from './pages/Explore/ExploreMain';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      
      <Switch>
        <Route exact path= "/">
        <Home></Home>
        </Route>
        <Route path="/explore">
          <ExploreMain></ExploreMain>
        </Route>
        <PrivateRoute path="/purchase/:id">
          <Purchase></Purchase>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
      </Switch>
   
      </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
