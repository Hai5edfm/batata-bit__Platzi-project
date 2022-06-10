import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@src/styles/index.scss'

import Landing from '@src/pages/Landing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
