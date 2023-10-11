import Main from './componntes/main/main';
import Login from './componntes/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
