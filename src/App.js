import React from 'react';
import {Route, Routes} from 'react-router-dom';

const HomePage = React.lazy(()=> import('./pages/home')); 
const CareerPage = React.lazy(()=> import('./pages/career'));
const ReferralPage = React.lazy(()=> import('./pages/referral')); 
const AirDropPage = React.lazy(()=> import('./pages/airdrop'));

const App = () => {
  return (
    <React.Suspense fallback={"..... loading"}>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/career' element={<CareerPage/>}></Route>
        <Route path='/airdrop' element={<AirDropPage/>}></Route>
        <Route path='/referral' element={<ReferralPage/>}></Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
