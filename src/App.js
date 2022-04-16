import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { LoginContext } from './context/LoginContext';

function App() {
  const {login} = useContext(LoginContext)
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {login && <Login />}
              <Navbar />
              <Home />
            </div>
          }
        ></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>

      {/* {login && <Login/>}
      <Navbar />
      <Home/> */}
    </div>
  );
}

export default App;
