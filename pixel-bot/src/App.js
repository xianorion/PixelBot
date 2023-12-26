import logo from './logo.svg';
import './App.css';
import Bot from './components/Bot';
import MainPage from './components/MainPage';
import UserProvider from './components/UserProvider';

 function App() {

  return (
    <div className="App">
      <header className="App-header">
        <UserProvider>
        <MainPage/>

        </UserProvider>

      </header>
    </div>
  );
}

export default App;
