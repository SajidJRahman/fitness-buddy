import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import Login from './Pages/Authentications/Login/Login';
import SignUp from './Pages/Authentications/SignUp/SignUp';
import About from './Pages/About/About/About';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about-me' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
