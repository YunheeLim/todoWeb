import { Route, Routes } from "react-router-dom";
import First from './Pages/First';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  // 서버로 데이터 요청하는 예시
  // const callApi=async()=>{
  //   axios.get("/api").then((res)=>console.log(res.data.text));
  // };

  // useEffect(()=>{
  //   callApi();
  // },[]);

  return (
    <Routes>
      <Route path="/first" element={<First/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
