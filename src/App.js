import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dash from './components/dash';
import Login from './components/login/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/msg" element={<Login />} />
          <Route path="/msg/welcome" element={<Dash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
