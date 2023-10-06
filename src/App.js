
import React from 'react';
// import { BrowserRouter as Router} from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';

import HomePage from './components/Homepage';
import TrainListPage from './components/TrainListPage';

function App() {
  return (
  
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/trains" element={<TrainListPage />} />
  </Routes>



  );
}

export default App;






