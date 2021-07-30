import logo from './logo.svg';
import './App.css';
import {Account} from './components/account'
import {Feed} from './components/feed'

function App() {
  return (
    <div className="App-header">
      <Account/>
      <Feed />
    </div>
  );
}

export default App;
