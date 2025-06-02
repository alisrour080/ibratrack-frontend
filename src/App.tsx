import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Layout from './components/Layout/Layout';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="/" element={<Landing/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/auth' element={<Auth/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}
export default App;