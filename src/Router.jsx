import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Signin from './components/Auth/Signin'
import Signup from './components/Auth/Signup'
import Auth from './routes/Auth'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Auth component={Signup} />} />
            <Route path="signin" element={<Auth component={Signin} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
