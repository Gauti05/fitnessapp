
import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Progress from './Pages/Progress';
import Chat from './Pages/Chat';

function App() {
  return (
 <div className='min-h-screen relative bg-gradient-to-r from-pink-300 via-orange-300 to-purple-300 overflow-hidden'>
      <div className='background'>
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>


    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/progress' element={<Progress/>}/>
      <Route path='/chat' element={<Chat/>}/>
      {/* <Route path='/progress' element={<div>progress page</div>}/> */}
      {/* <Route path='/workout' element={<Workout/>}/> */}
      {/* <Route path='/nutrition' element={<Nutrition/>}/> */}
      {/* <Route path='/community' element={<Community/>}/> */}
      {/* <Route path='/settings' element={<Settings/>}/> */}
    </Routes>
    </div>
  );
}

export default App;
