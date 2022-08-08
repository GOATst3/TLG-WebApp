import React from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import WorkInProgress from './Components/WorkInProgress/WorkInProgress';
import Landing from './Components/Landing/Landing';
import Dashboard from './Components/Dashboard/Dashboad'

function App() {

  const logged=localStorage.getItem('logged')
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={logged?<Navigate replace to='Dashboard'/> : <Landing/>}/>
          <Route path="WorkInProgress" element={<WorkInProgress />} />
          <Route path='Dashboard' element={!logged? <Navigate replace to='/'/> : <Dashboard />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;