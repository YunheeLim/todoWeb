import { Route, Routes } from "react-router-dom";
import First from './Pages/First';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<First/>}/>
      <Route path="/first" element={<First/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
