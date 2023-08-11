import { Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Schedule from './component/Schedule';
import Carinformation from './component/Carinformation';
import Drivingmap from './component/Drivingmap';
import Managethebusschedule from './component/Managethebusschedule';
import Managetheroadmap from './component/Managetheroadmap';
import Safetyinformation from './component/Safetyinformation';
import Travelinformation from './component/Travelinformation';
import Driverinformation from './component/Driverinformation';
import Message from './component/Message';

import Phoneindex from './component/Phoneindex';
import Phonelogin from './component/Phonelogin';
import Phonechoose from './component/Phonechoose';
import Phonecompany from './component/Phonecompany';
import PhoneChoosecar from './component/PhoneChoosecar';
import Phonecar from './component/Phonecar';
import Phonetablecar from './component/Phonetablecar';
import Phonetablecheckcar from './component/Phonetablecheckcar';
import Phonecheckcar from './component/Phonecheckcar';
import Phonetableperson from './component/Phonetableperson';
import Phonetablecheckperson from './component/Phonetablecheckperson';
import Phonecalendar from './component/Phonecalendar';

import Phonemaps from './component/Phonemaps';
import Phonealert from './component/Phonealert';
import Phoneprofile from './component/Phoneprofile';
const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/Phoneindex' element={<Phoneindex />}></Route>
        <Route path='/Phonelogin' element={<Phonelogin />}></Route>
        <Route path='/Phonechoose' element={<Phonechoose />}></Route>
        <Route path='/Phonecompany' element={<Phonecompany />}></Route>
        <Route path='/PhoneChoosecar' element={<PhoneChoosecar />}></Route>
        <Route path='/Phonecar' element={<Phonecar />}></Route>
        <Route path='/Phonetablecar' element={<Phonetablecar />}></Route>
        <Route path='/Phonetablecheckcar' element={<Phonetablecheckcar />}></Route>
        <Route path='/Phonecheckcar' element={<Phonecheckcar />}></Route>
        <Route path='/Phonetableperson' element={<Phonetableperson />}></Route>
        <Route path='/Phonetablecheckperson' element={<Phonetablecheckperson />}></Route>
        <Route path='/Phonecalendar' element={<Phonecalendar />}></Route>

        <Route path='/Phonemaps' element={<Phonemaps />}></Route>
        <Route path='/Phonealert' element={<Phonealert />}></Route>
        <Route path='/Phoneprofile' element={<Phoneprofile />}></Route>

        <Route path='/' element={<Homepage />}></Route>
        <Route path='/Schedule' element={<Schedule />}></Route>
        <Route path='/Carinformation' element={<Carinformation />}></Route>
        <Route path='/Drivingmap' element={<Drivingmap />}></Route>
        <Route path='/Managethebusschedule' element={<Managethebusschedule />}></Route>
        <Route path='/Managetheroadmap' element={<Managetheroadmap />}></Route>
        <Route path='/Safetyinformation' element={<Safetyinformation />}></Route>
        <Route path='/Travelinformation' element={<Travelinformation />}></Route>
        <Route path='/Driverinformation' element={<Driverinformation />}></Route>
        <Route path='/Message' element={<Message />}></Route>
      </Routes>
    </div>
  );
}

export default App;
