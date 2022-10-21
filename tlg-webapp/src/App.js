import React from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import WorkInProgress from './Components/WorkInProgress/WorkInProgress';
import Landing from './Components/Landing/Landing';
import ContentFeed from './Components/Dashboard/ContentFeed/ContentFeed';
import ContactMe from './Components/Dashboard/ContactMe/ContactMe';
import Wishlist from './Components/Dashboard/Wishlist/Wishlist';

function App() {
  if(!(('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0))) document.body.classList.add('not-touch-device')

  const logged=localStorage.getItem('logged')
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={logged?<Navigate replace to='ContentFeed'/> : <Landing/>}/>
          <Route path="WorkInProgress" element={<WorkInProgress />} />
          <Route path='ContentFeed' element={!logged? <Navigate replace to='/'/> : <ContentFeed />} />
          <Route path='ContactMe' element={!logged? <Navigate replace to='/'/> : <ContactMe />} />
          <Route path='Wishlist' element={!logged? <Navigate replace to='/'/> : <Wishlist />} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
