import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@src/styles/index.scss';

import Landing from '@src/pages/Landing';
import { Payment } from '@src/pages/Payment';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/payment/:id" element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
