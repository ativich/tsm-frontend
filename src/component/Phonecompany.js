// import './phonemain.css'
// import React from 'react';
import React, { useState } from 'react';

const Phonecompany = () => {
  const [showContent, setShowContent] = useState(false);
  const handleBoxClick = () => {
    setShowContent(!showContent);
  };

  
  return (
    <div >
      <div style={{fontSize:"35px",boxShadow:"0 3px 3px rgb(0,0,0,0.3)"}}>
        <div style={{marginLeft:"20px",marginTop:"20px"}}><a href='/Phonechoose'>
          <i class="bi bi-arrow-left-circle-fill"></i></a>
          <span style={{textAlign:"center",marginLeft:"30%",fontSize:"20px"}}><b>บริษัท</b></span>
        </div>
      </div>

      <div className='' style={{marginTop:"0px",width:"80%",marginLeft:"10%"}}> 
        <a href='/PhoneChoosecar'>
          <div className='spean'>
            <div style={{marginTop:"0px"}}>
              <div style={{fontSize:"25px",backgroundColor:"black",color:"white",padding:"2px 12px 0px 10px",borderRadius:"10px",display:"inline"}}>
                <i class="bi bi-building"></i>
              </div>
              <div style={{display:"inline",marginLeft:"10px",color:"black"}}><b>บริษัท 1</b></div>
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

      <div className='' style={{marginTop:"0px",width:"80%",marginLeft:"10%"}}> 
        <a href='/PhoneChoosecar'>
          <div className='spean'>
            <div style={{marginTop:"0px"}}>
              <div style={{fontSize:"25px",backgroundColor:"black",color:"white",padding:"2px 12px 0px 10px",borderRadius:"10px",display:"inline"}}>
              <i class="bi bi-building"></i>
              </div>
              <div style={{display:"inline",marginLeft:"10px",color:"black"}}><b>บริษัท 2</b></div>
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

      <div className='' style={{marginTop:"0px",width:"80%",marginLeft:"10%"}}> 
        <a href='/PhoneChoosecar'>
          <div className='spean'>
            <div style={{marginTop:"0px"}}>
              <div style={{fontSize:"25px",backgroundColor:"black",color:"white",padding:"2px 12px 0px 10px",borderRadius:"10px",display:"inline"}}>
              <i class="bi bi-building"></i>
              </div>
              <div style={{display:"inline",marginLeft:"10px",color:"black"}}><b>บริษัท 3</b></div>
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

      <div className='' style={{marginTop:"0px",width:"80%",marginLeft:"10%"}}> 
        <a href='/PhoneChoosecar'>
          <div className='spean'>
            <div style={{marginTop:"0px"}}>
              <div style={{fontSize:"25px",backgroundColor:"black",color:"white",padding:"2px 12px 0px 10px",borderRadius:"10px",display:"inline"}}>
              <i class="bi bi-building"></i>
              </div>
              <div style={{display:"inline",marginLeft:"10px",color:"black"}}><b>บริษัท 4</b></div>
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

      <div className='' style={{marginTop:"0px",width:"80%",marginLeft:"10%"}}> 
        <a href='/PhoneChoosecar'>
          <div className='spean'>
            <div style={{marginTop:"0px"}}>
              <div style={{fontSize:"25px",backgroundColor:"black",color:"white",padding:"2px 12px 0px 10px",borderRadius:"10px",display:"inline"}}>
              <i class="bi bi-building"></i>
              </div>
              <div style={{display:"inline",marginLeft:"10px",color:"black"}}><b>บริษัท 5</b></div>
            </div>
              <div className='' style={{fontSize:"16px"}}>
                <p><b><i class="bi bi-chevron-right"></i></b></p>
              </div>
          </div>
        </a>
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
     


      {/* <div className='foot'  id='footContainer'>
          <div className='box01' >
            <a href="/Schedule" ></a>
            <div style={{marginTop:"-15px"}}><i class="bi bi-calendar-range-fill"></i></div>
            <div style={{fontSize:"12px"}}>การเดินรถ</div>
          </div>
          <div className='box01'>
            <a href="/Phonemaps" ><div style={{color:"blue",marginTop:"-15px"}}><i class="bi bi-map-fill"></i></div>
            <div style={{fontSize:"12px",color:"blue"}}>แผนที่</div></a>
          </div>
          <div className='box01'>
            <a href="/Phonealert" ><div style={{marginTop:"-15px"}}><i class="bi bi-bell"></i></div>
            <div style={{fontSize:"12px"}}>การแจ้งเตือน</div></a>
          </div>
          <div className='box01'>
            <a href="/Phoneprofile" ><div style={{marginTop:"-15px"}}><i class="bi bi-person-circle"></i></div>
            <div style={{fontSize:"12px"}}>โปรไฟล์</div></a>
          </div>
      </div> */}

    </div>
  );
};
export default Phonecompany;