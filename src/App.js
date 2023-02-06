import logo from './assets/logo-transparent.png';
import './App.css';

function App() {
  return (
    <div className="bg-black text-light font-body flex flex-col min-h-[100vh]">
      <div className="container mx-auto flex-grow">
        <header className="App-header">
          <span className="block w-8 h-8"><img src={logo} className="App-logo" alt="logo" /></span>
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          hi
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
