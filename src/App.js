import Topbar from './components/TopBar/TopBar'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
// import Settings from './Pages/Settings/Settings';
// import Home from './Pages/Home/Home'
// import Single from './components/Single/Single';
import Write from './Pages/Write/Write';

function App() {
  return (
    <div className="App">
      <Topbar />
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      {/* <Login/> */}
      <Register />
    </div>
  );
}

export default App;
