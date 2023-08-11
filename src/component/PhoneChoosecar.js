// import './phonemain.css'
import React, { useState } from 'react';

const Phonecar = () => {
  const [showContent, setShowContent] = useState(false);
  const handleBoxClick = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
      <div style={{fontSize:"35px",boxShadow:"0 3px 3px rgb(0,0,0,0.3)"}}>
        <div style={{marginLeft:"20px",marginTop:"20px"}}><a href='/Phonecompany'>
          <i class="bi bi-arrow-left-circle-fill"></i></a>
          <span style={{textAlign:"center",marginLeft:"25%",fontSize:"20px"}}><b>รถในบริษัท</b></span>
        </div>
      </div>

      <div className='' style={{marginTop:"10px",width:"80%",marginLeft:"10%"}}> 
          <div className='spean'>
            <div style={{marginTop:"0px"}}>
              <div >
                <input style={{backgroundColor:"black",color:"white",padding:"5px 40px 5px 10px",borderRadius:"20px",display:"inline"}}></input>
              </div>
            </div>
            <div>
              <div className='daytime' >
                <select style={{backgroundColor:"black",color:"white",padding:"5px 5px 5px 15px",borderRadius:"20px",right:"10px"}}>
                  <option value="a1">ประเภทรถ</option>
                  <option value="b1">-</option>
                </select>
              </div>
            </div>
            
          </div>
      </div>

      <div className='' style={{marginTop:"0px",width:"90%",marginLeft:"10%"}}> 
        <a href='/Phonecar'>
          <div className='spean'>
            <div style={{marginTop:"0px"}}>
              <div style={{fontSize:"30px",backgroundColor:"black",color:"white",padding:"3px 10px 2px 10px",borderRadius:"10px",display:"inline"}}>
                <i class="bi bi-truck"></i>
              </div>
              <div style={{display:"inline",marginLeft:"10px",color:"black"}}>
                <b>รถคันที่ 1</b>
              </div> 
            </div>
            <div className='' style={{fontSize:"16px"}}>
              <p><b><i class="bi bi-chevron-right"></i></b></p>
            </div>
          </div>
        </a>
      </div>

      <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
        <div className='line0'></div>
      </div>


      <div className='fullScreenDiv' onClick={handleBoxClick}>
      </div>
        {showContent && (
          <div className='foot0'>
            <div className='box0'>
              <a href="/Phonecalendar"><div style={{marginTop:"-15px"}}><i className="bi bi-calendar-range-fill"></i></div>
              <div style={{fontSize:"12px"}}>การเดินรถ</div></a>
            </div>    
            <div className='box0'>
              <a href="/Phonemaps"><div style={{marginTop:"-15px"}}><i className="bi bi-map-fill"></i></div>
              <div style={{fontSize:"12px"}}>แผนที่</div></a>
            </div>
            <div className='box0'>
              <a href="/Phonealert"><div style={{marginTop:"-15px"}}><i className="bi bi-bell"></i></div>
              <div style={{fontSize:"12px"}}>การแจ้งเตือน</div></a>
            </div>
            <div className='box0'>
              <a href="/Phoneprofile"><div style={{marginTop:"-15px"}}><i className="bi bi-person-circle"></i></div>
              <div style={{fontSize:"12px"}}>โปรไฟล์</div></a>
            </div>
          </div>
        )}


    </div>
  );
};
export default Phonecar;