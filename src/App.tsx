import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logged from './pages/Logged';
import DataEntry from './components/DataEntry';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/dm" element={<Logged children={<DataEntry />}/>} />
          <Route path="/user/*" element={<Logged children={<NotFoundPage />}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
