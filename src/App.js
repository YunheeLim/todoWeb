import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import First from './Pages/First';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">

    //   </header>
    // </div>
    <Routes>
      <Route path="/first" element={<First/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
