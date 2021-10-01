import "./App.css";
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> Home</Link></li>
        <li>
          <Link to="/about">about</Link></li>
        
        <li>
          <Link to="/About">About</Link></li>
        
          <li>
        <Link to="/contact">Contact</Link> </li>
      </ul>
    </div>
  );
}

export default App;
