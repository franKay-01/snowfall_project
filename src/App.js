import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom';

const HomePage = React.lazy(()=> import('./pages/home')); 

const App = () => {
  return (
    <React.Suspense fallback={"..... loading"}>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
