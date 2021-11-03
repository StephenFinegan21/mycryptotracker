import logo from './logo.svg';
import Login from './pages/Login';
import CssBaseline from '@mui/material/CssBaseline';
import './App.scss';
import Nav from './component/Nav';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <CssBaseline />
        <Switch>
          <Route exact path="/">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/forgotpassword">
              <ForgotPassword />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
