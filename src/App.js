import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been Enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success");
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    {/* <Router> */}
      
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      
      <div className="container my-3">
        <Alert alert={alert} />
        {/* <Switch>
          <Route exact path="/about">
            <About title="TextUtils - About" mode={mode} />
          </Route>
          <Route exact path="/"> */}
            <TextForm title="TextUtils - Home" showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* </Route>
        </Switch> */}
      </div>

    {/* </Router> */}
    </> 
  );
}

export default App;
