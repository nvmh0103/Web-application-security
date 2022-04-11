import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import Login from './pages/Login';
import List from './pages/List';
import Single from './pages/Single';
import New from './pages/New';

function App() {
  return (
    <div className="admin-main">
      <BrowserRouter>
        <Routes>
          <Route  path='/'>
            <Route index element={<HomePage/>} />
            <Route path="login" element={<Login/>} />

            <Route path='users'>
              <Route  index element={<List/>} />
              <Route path=':userID' element={<Single/>} />
              <Route path='new' element={<New/>} />
            </Route>

            <Route path='products'>
              <Route  index element={<List/>} />
              <Route path=':productID' element={<Single/>} />
              <Route path='new' element={<New/>} />
            </Route>


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
