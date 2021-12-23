
import Login from './pages/Login';
import CssBaseline from '@mui/material/CssBaseline';
import './App.scss';
import Nav from './component/Nav';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Rankings from './pages/Rankings';
import News from './pages/News';
import { useAuthContext } from './hooks/useAuthContext';


import {
  HashRouter,
  Switch,
  Route, Redirect
} from "react-router-dom";
import TransactionPage from './component/TransactionPage';


function App() {
const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
      <HashRouter>
     
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
            <Route exact path="/transactions/:id">
              {user && <TransactionPage /> }
              {!user && <Redirect to ="/login" />}
            </Route>
            <Route exact path="/rankings">
              <Rankings />
            </Route>

            <Route exact path="/news">
              <News />
            </Route>
            
          </Switch>
      </HashRouter>
      )}
    </div>
  );
}

export default App;
