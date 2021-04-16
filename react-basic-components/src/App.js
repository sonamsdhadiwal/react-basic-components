import './App.css';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes/index';

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

function App() {
  return (
      <Router history = {history}>
        <Routes/>
      </Router>
  );
}

export default App;
