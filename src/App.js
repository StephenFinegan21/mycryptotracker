import logo from './logo.svg';
import Login from './pages/Login';
import CssBaseline from '@mui/material/CssBaseline';
import './App.scss';
import Nav from './component/Nav';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import { useAuthContext } from './hooks/useAuthContext';


import {
  BrowserRouter,
  Switch,
  Route, Redirect
} from "react-router-dom";


function App() {
const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
      <BrowserRouter>
     
      <Nav />
      
      <CssBaseline />
        <Switch>
          <Route exact path="/">
              {!user && <Register /> }
              {user && <Redirect to ="/dashboard" />}
            </Route>
            <Route path="/login">
              {!user && <Login /> }
              {user && <Redirect to ="/dashboard" />}
            </Route>
            <Route path="/register">
              {!user && <Register /> }
              {user && <Redirect to ="/dashboard" />}
            </Route>
            <Route exact path="/forgotpassword">
              <ForgotPassword />
            </Route>
            <Route exact path="/dashboard">
              {user && <Dashboard /> }
              {!user && <Redirect to ="/login" />}
            </Route>
          </Switch>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
