import './App.css';

import Navbar from './components/NavbarContent/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Firstpage from './components/NavbarContent/Firstpage';
import FirstPage from './components/ResumeTemplates/FirstPage';
import SecondPage from './components/ResumeTemplates/SecondPage';
import ThirdPage from './components/ResumeTemplates/ThirdPage';
import FourthPage from './components/ResumeTemplates/FourthPage';
import FirstTemp from './Templates/FirstTemp.js'
import SecondTemp from './Templates/SecondTemp.js'
import ThirdTemp from './Templates/ThirdTemp';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Firstpage/>}></Route>
        <Route path='/resumetemplates' element={<Firstpage/>}></Route>
        {/* <Route path='/resumetemplates/resumetemplate' element={<FirstPage/>}></Route> */}
        <Route path='/resumetemplates/resumetemplate/personalinfo' element={<FirstPage/>}></Route>
        <Route path='/resumetemplates/resumetemplate/workexperience' element={<SecondPage/>}></Route>
        <Route path='/resumetemplates/resumetemplate/education' element={<ThirdPage/>}></Route>
        <Route path='/resumetemplates/resumetemplate/keyskill' element={<FourthPage/>}></Route>
        <Route path='/resumetemplates/resumetemplate/keyskill/preview01' element={<FirstTemp/>}></Route>
        <Route path='/resumetemplates/resumetemplate/keyskill/preview02' element={<SecondTemp/>}></Route>
        <Route path='/resumetemplates/resumetemplate/keyskill/preview03' element={<ThirdTemp/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
