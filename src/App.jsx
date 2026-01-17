import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TUI from './components/TUI';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the main portfolio */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the Terminal Interface */}
        <Route path="/tui" element={<TUI />} />
      </Routes>
    </Router>
  );
};

export default App;