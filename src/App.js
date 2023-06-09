import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dash from './components/dash';
import Login from './components/login/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<Login />} />
          <Route path="/msg" element={<Dash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
