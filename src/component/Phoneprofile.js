import './main.css'
import React from 'react';

const Phoneprofile = () => {
  return (
    <div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"80px"}}>
            <div className='icon-container'><img src='/logo512.png' className='round-icon'/></div> 
        </div>
        <div style={{marginTop:"",textAlign:"center"}}>
            <p style={{marginBottom:"0px"}}><b>พนักงานขับรถคนที่ 1</b></p>
            <p style={{marginTop:"0px"}}>ประสับการณ์ขับรถ:3 ปี 8 เดือน 9 วัน</p>
        </div>

        <div className='' style={{marginTop:"0px",width:"80%",marginLeft:"10%"}}> 
          <a href="/Phonecompany" >
            <div className='spean'>
              <div style={{marginTop:"0px"}}>
                <div style={{fontSize:"25px",backgroundColor:"black",color:"white",padding:"2px 12px 0px 10px",borderRadius:"10px",display:"inline"}}>
                <i class="bi bi-building"></i>
                  </div>
                  <div style={{display:"inline",marginLeft:"10px"}}><b>เลือกบริษัท</b></div>
              </div>
              <div className='' style={{fontSize:"16px"}}>
                <p><b><i class="bi bi-chevron-right"></i></b></p>
              </div>
            </div>
          </a>
        </div>

        <div className='' style={{marginTop:"0px",width:"80%",marginLeft:"10%"}}> 
          <a href="/Phoneindex">
            <div className='spean'>
              <div style={{marginTop:"0px"}}>
                <div style={{fontSize:"25px",backgroundColor:"black",color:"white",padding:"2px 12px 0px 5px",borderRadius:"10px",display:"inline"}}>
                  <i class="bi bi-box-arrow-in-right"></i>
                  </div>
                  <div style={{display:"inline",marginLeft:"10px"}}><b>ออกจากระบบ</b></div>
              </div>
              <div className='' style={{fontSize:"16px"}}>
                <p><b><i class="bi bi-chevron-right"></i></b></p>
              </div>
            </div>
          </a>
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
            <a href="/Phonealert" ><div style={{marginTop:"-15px"}}><i class="bi bi-bell"></i></div>
            <div style={{fontSize:"12px"}}>การแจ้งเตือน</div></a>
          </div>
          <div className='box0'>
            <a href="/Phoneprofile" ><div style={{color:"blue",marginTop:"-15px"}}><i class="bi bi-person-circle"></i></div>
            <div style={{fontSize:"12px",color:"blue"}}>โปรไฟล์</div></a>
          </div>
        </div>
    </div>
  );
};
export default Phoneprofile;