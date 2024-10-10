import logo from './childline-logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Index from './components/pages/index';
import Help from './components/pages/help';
import ResourcesPage from './components/pages/resources';
import ForumDetailsPage from './components/pages/forum-details';
import ForumEditsPage from './components/pages/forum-edits';
import { Login } from './components/pages/login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/resources" element={<ResourcesPage/>}/>
                <Route path="/blog-details" element={<ForumDetailsPage/>}/>
                <Route path="/blog-edits" element={<ForumEditsPage/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
