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
const App = () => {
  return (
    <div >
      <Routes>
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
