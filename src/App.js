import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchAppBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <SearchAppBar />
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
