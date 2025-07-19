import { Routes, Route, Link } from 'react-router-dom';

import MyHomeComp from './pages/Home';
import MyAboutComp from './pages/About';
import MyCalComp from './pages/MyCalculator';
import MyUsersComp from './pages/Users';

function App() {
  return (
    <div>
      
      <nav style={{ display: 'flex', gap: '20px' }}> 
      	<Link to="/homee"> MyHome </Link>
        <Link to="/abttt"> MyAbout </Link>
        <Link to="/call"> MyCalculator </Link>
        <Link to="/usrrr"> Users </Link>
      </nav>

      <Routes>
        <Route path="/homee" element={<MyHomeComp />} />
        <Route path="/abttt" element={<MyAboutComp />} />
        <Route path="/call" element={<MyCalComp />} />
        <Route path="/usrrr" element={<MyUsersComp />} />
      </Routes>
    </div>
  );
}

export default App;

