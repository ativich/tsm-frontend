import './main.css'
import React, { useState } from 'react';

const Phonemaps = () => {
  return (
    <div>
        <div style={{fontSize:"35px"}}>
            <div style={{marginLeft:"20px",marginTop:"20px"}}>
                <i class="bi bi-arrow-left-circle-fill"></i>
            </div>
        </div>
        <div className='spean0'>
            <div style={{marginLeft:"10%"}}>
                <div >
                    <input className='where' placeholder='ชื่อสถานที่ปลายทาง 1'></input>
                </div>
                <div>
                    <input className='where' placeholder='ชื่อสถานที่ปลายทาง 1'></input>
                </div>
            </div>
            <div>
                <a href="/Message" ><div className='iconcontainer'style={{float:"left",float:"right"}}>
                <i class="bi bi-chat-dots" style={{fontSize:"25px",marginLeft:"10px",marginTop:"5px"}}></i></div></a>
            </div>
        </div>

        <div className='foot'>
          <div className='box0' >
            <a href="/Phonecalendar" >
            <div style={{marginTop:"-15px"}}><i class="bi bi-calendar-range-fill"></i></div>
            <div style={{fontSize:"12px"}}>การเดินรถ</div></a>
          </div>
          <div className='box0'>
            <a href="/Phonemaps" ><div style={{color:"blue",marginTop:"-15px"}}><i class="bi bi-map-fill"></i></div>
            <div style={{fontSize:"12px",color:"blue"}}>แผนที่</div></a>
          </div>
          <div className='box0'>
            <a href="/Phonealert" ><div style={{marginTop:"-15px"}}><i class="bi bi-bell"></i></div>
            <div style={{fontSize:"12px"}}>การแจ้งเตือน</div></a>
          </div>
          <div className='box0'>
            <a href="/Phoneprofile" ><div style={{marginTop:"-15px"}}><i class="bi bi-person-circle"></i></div>
            <div style={{fontSize:"12px"}}>โปรไฟล์</div></a>
          </div>
        </div>
    </div>
  );
};
export default Phonemaps;