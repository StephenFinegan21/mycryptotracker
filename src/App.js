import logo from './logo.svg';
import Login from './pages/Login';
import CssBaseline from '@mui/material/CssBaseline';
import './App.scss';
import Nav from './component/Nav';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Nav />
        <Login />
    </div>
  );
}

export default App;
