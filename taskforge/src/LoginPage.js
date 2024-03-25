import login from './loginPage.jpg';
import './App.css';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <p class="login">This is a box</p>
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

export default Login;
