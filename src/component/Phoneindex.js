// import './main.css'
import './phone.css'
import React from 'react';

const Phoneindex = () => {
  const styles = {
    margin: 0,
    padding: 0,
    backgroundImage: "url(/shutterstock.jpg)",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };
  return (
    <div style={styles} >
      <div>
        <div style={{color:"white",fontSize:"25px",padding:"35px 0px 0px 30px"}}><b>TSM</b></div>
      </div>
      <div className='text'>
        <div>
          <p style={{marginBottom:"0px",fontSize:"30px"}}><b>Transport Safety </b></p>
          <p style={{marginBottom:"0px",marginTop:"0px",fontSize:"30px"}}><b>Management</b></p>
        </div>
        <div><p style={{marginTop:"0px"}}>ระบบบริหารความปลอดภัยด้านการขนส่ง</p></div>
      </div>
      <div style={{display:"grid",placeItems:"center"}}>
       <div className='login'><a href='/Phonelogin'><b style={{color:"black"}}>เข้าสู่ระบบ</b></a></div>
      </div>
    </div>
  );
};
export default Phoneindex;