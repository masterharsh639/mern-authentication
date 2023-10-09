import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Header from './components/Header';

const App = () => {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  </BrowserRouter>
}
export default App