import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navigation } from './layouts';
import { Favourites, Home } from './screens';
import { StoreProvider } from '@pet-project/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/favourites' element={<Favourites/>} />
        </Routes>
      </BrowserRouter>
     </StoreProvider>
  </StrictMode>
);
