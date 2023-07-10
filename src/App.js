import React from 'react';
import {Route, Routes} from 'react-router-dom';

const HomePage = React.lazy(()=> import('./pages/home')); 
const CareerPage = React.lazy(()=> import('./pages/career'));

const App = () => {
  return (
    <React.Suspense fallback={"..... loading"}>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/career' element={<CareerPage/>}></Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
