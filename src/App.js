import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>
        <Student 
                stud="101331910" 
                name="Safa Aru" 
                college="George Brown College" 
                city="Toronto">
        </Student>
      </header>
    </div>
  );
}

export default App;
