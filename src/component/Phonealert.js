import './main.css'
import React from 'react';

const Phonealert = () => {
  return (
    <div>
        <div style={{fontSize:"30px"}}>
            <div style={{marginLeft:"20px",marginTop:"20px"}}>
                <p><b>การแจ้งเตือน</b></p>
            </div>
        </div>

        <div className='foot'>
          <div className='box0' >
            <a href="/Phonecalendar" >
            <div style={{marginTop:"-15px"}}><i class="bi bi-calendar-range-fill"></i></div>
            <div style={{fontSize:"12px"}}>การเดินรถ</div></a>
          </div>
          <div className='box0'>
            <a href="/Phonemaps" ><div style={{marginTop:"-15px"}}><i class="bi bi-map-fill"></i></div>
            <div style={{fontSize:"12px"}}>แผนที่</div></a>
          </div>
          <div className='box0'>
            <a href="/Phonealert" ><div style={{color:"blue",marginTop:"-15px"}}><i class="bi bi-bell"></i></div>
            <div style={{fontSize:"12px",color:"blue"}}>การแจ้งเตือน</div></a>
          </div>
          <div className='box0'>
            <a href="/Phoneprofile" ><div style={{marginTop:"-15px"}}><i class="bi bi-person-circle"></i></div>
            <div style={{fontSize:"12px"}}>โปรไฟล์</div></a>
          </div>
        </div>
    </div>
  );
};
export default Phonealert;