// import logo from './logo.svg';
import './App.css';
import Home from './Component/Pages/Home';
import LoginSignup from './Component/Pages/LoginSignup';
import SinglePage from './Component/Pages/SinglePage';
// import SignUp from './Component/Pages/SignUp';
import AllRoutes from './Component/Routes/AllRoutes';
import NavBar from './Component/Routes/NavBar';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <AllRoutes/>
      {/* <SinglePage/> */}

    </div>
  );
}

export default App;
