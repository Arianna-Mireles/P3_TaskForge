import login from './loginPage.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={login} className="App-login" alt="login" />
      </header>
      <footer>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
