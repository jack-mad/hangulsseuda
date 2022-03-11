import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Lesson from './components/Home/Lesson'
import Signin from './components/Auth/Signin'
import Signup from './components/Auth/Signup'
import Profile from './components/Auth/Profile'
import Auth from './routes/Auth'
import AuthOk from './routes/AuthOk'
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
            <Route path="lesson/:name" element={<AuthOk component={Lesson} />} />
            <Route path="profile" element={<AuthOk component={Profile} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </UsersState>
    </>
  );
}

export default App;
