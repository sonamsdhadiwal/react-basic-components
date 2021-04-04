import './App.css';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes/index';

function App() {
  return (
      <Router history = {history}>
        <Routes/>
      </Router>
  );
}

export default App;
