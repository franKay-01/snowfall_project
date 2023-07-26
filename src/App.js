import React from 'react';
import {Route, Routes} from 'react-router-dom';

const HomePage = React.lazy(()=> import('./pages/home')); 
const CareerPage = React.lazy(()=> import('./pages/career'));
const ReferralPage = React.lazy(()=> import('./pages/referral')); 
const AirDropPage = React.lazy(()=> import('./pages/airdrop'));
const BlogPage = React.lazy(()=> import('./pages/blog'));
const ArticlePage = React.lazy(()=>import('./pages/blogArticle'));

const App = () => {
  return (
    <React.Suspense>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/blog' element={<BlogPage/>}></Route>
        <Route path='/career' element={<CareerPage/>}></Route>
        <Route path='/airdrop' element={<AirDropPage/>}></Route>
        <Route path='/article' element={<ArticlePage/>}></Route>
        <Route path='/referral' element={<ReferralPage/>}></Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
