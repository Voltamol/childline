import logo from './childline-logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import IconBox from './components/icon-box';
function App() {
  return (
    <div className="App">
      <br/>
      <div className="row featured-services px-3">
        <IconBox/>
        <IconBox/>
        <IconBox/>
        <IconBox/>
      </div>
    </div>
  );
}

export default App;
