import Employee from './components/Employee';
import { Routes, Route, Navigate } from 'react-router';
import Login from "./pages/Login"
import Welcome from './initial/Welcome';
import Protected from './pages/protected'
import FullScreen from './components/UI/FullScreen';
import { Layout } from './layout/Layout';
function App() {
  let loggedIn = JSON.parse(localStorage.getItem('isLogin'))
  return (
    // <Layout>
    // <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      {/* <Route path="/dashboard" element={<FullScreen />} /> */}
      {/* <Route
        exact
        path="dashboard"
        element={
          loggedIn[0]?
            <FullScreen />:
            <Navigate replace to={"/"} />
          }
          />  */}
      <Route element={<Protected />}>
        <Route element={<Layout />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/employee" element={<Employee />} />

        </Route>
        <Route path="/dashboard" element={<FullScreen/>}/>

      </Route>

    </Routes>
    // <div>
    //   <Cara/>
    // </div>
  );
}

export default App;
