import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextField from './components/TextField';

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Navbar title="SATHEE" />
      <Alert alert={alert} />
      <div className="container my-3">
          <TextField showAlert={showAlert} heading = "Area for text"/>
      </div>
    </>
  );
}

export default App;
 