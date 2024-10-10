import logo from './childline-logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Index from './components/pages/index';
import Help from './components/pages/help';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/help" element={<Help/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
