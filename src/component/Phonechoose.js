// import './phonemain.css'
import React from 'react';

const Phonechoose = () => {
  return (
    <div>
      <div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"80px"}}>
            <div className='icon-container0'><img src='/logo512.png' className='round-icon'/></div> 
        </div>
        <div style={{marginTop:"",textAlign:"center"}}>
            <p style={{marginBottom:"0px",fontSize:"25px",marginTop:"15px"}}><b>TSM 1</b></p>
            <p style={{marginTop:"0px",fontSize:"16px"}}>การทำงาน:1 ปี 8 เดือน 9 วัน</p>
        </div>
      </div>

      <div className='' style={{marginTop:"10px",width:"80%",marginLeft:"10%"}}> 
        <a href='/Phonecompany'>
          <div className='spean'>
            <div style={{marginTop:"10px"}}>
              <div style={{fontSize:"25px",backgroundColor:"black",color:"white",padding:"2px 12px 0px 10px",borderRadius:"10px",display:"inline"}}>
              <i class="bi bi-building"></i>
              </div>
              <div style={{display:"inline",marginLeft:"10px"}}><b>บริษัท</b></div>
            </div>
              <div className='' style={{fontSize:"16px"}}>
                <p><b><i class="bi bi-chevron-right"></i></b></p>
              </div>
          </div>
        </a>
      </div>

      <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
        <div className='line0'></div>
      </div>

      <div className='' style={{marginTop:"10px",width:"80%",marginLeft:"10%"}}> 
        <a href='/Phoneindex'>
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

    </div>
  );
};
export default Phonechoose;