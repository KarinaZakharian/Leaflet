import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';

import CreateCardForm from '../Forms/CreateNewCard';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/add-appartment" element={<CreateCardForm/>} />
        
      </Routes>
    </div>
  );
}

export default App;
