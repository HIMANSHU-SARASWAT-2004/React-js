import './App.css';
import Navbar from './components/Navbar';
import TextField from './components/TextField';

function App() {
  return (
    <>
      <Navbar title="SATHEE" />
      <div className="container my-3">
          <TextField heading = "Area for text"/>
      </div>
    </>
  );
}

export default App;
