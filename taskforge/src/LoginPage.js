import login from './loginPage.jpg';
import './App.css';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="login">This is a box</h1>
        <img src={login} className="App-login" alt="login" />
        <p class="photoCitation1">
          Photo by <a href="https://www.pexels.com/photo/person-holding-white-stylus-768472/">
            Jess Bailey Designs</a> on <a href="https://www.pexels.com/@jessbaileydesign/">Unsplash</a>
        </p>
        <section>
          <button class="login2">Login</button>
          <button class="login2">Sign Up</button>
        </section>
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
