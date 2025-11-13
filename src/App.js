import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Checkout from './components/Checkout';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  const token = localStorage.getItem('token'); 

  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> | 
        <Link to="/checkout">Checkout</Link> |
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={token ? <Navigate to="/home" /> : <Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
