import logo from './logo.svg';
import Employee from './components/Employee';
import { Layout } from './layout/Layout'
import {useState} from 'react'
import { Routes,Route } from 'react-router';
import Initial from "./initial/Initial"
import Login from "./pages/Login"
import Welcome from './initial/Welcome';
import Protected from './pages/protected'
function App() {
  const[loggedIn,IsLoggedIn]=useState(false)
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route element={<Protected />}>
        <Route path="/welcome" element={<Welcome/>} />
      </Route>

    </Routes>
  );
}

export default App;
