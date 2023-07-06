import React from 'react';
import {Route, Routes} from 'react-router-dom';

const HomePage = React.lazy(()=> import('./pages/home')); 
const ReferralPage = React.lazy(()=> import('./pages/referral')); 

const App = () => {
  return (
    <React.Suspense fallback={"..... loading"}>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/referral' element={<ReferralPage/>}></Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
