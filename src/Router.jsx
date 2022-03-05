import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Signin from './components/Auth/Signin'
import Signup from './components/Auth/Signup'
import Auth from './routes/Auth'
import UsersState from './context/Users/UsersState';

function App() {
  return (
    <>
    <UsersState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Auth component={Signup} />} />
            <Route path="signin" element={<Auth component={Signin} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </UsersState>
    </>
  );
}

export default App;
