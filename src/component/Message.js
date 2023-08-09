import './main.css'
import React, { useState } from 'react';

const Message = () => {
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const toggleCompany = () => {
    setCompanyOpen((prevState) => !prevState);
  };
  const closeCompany = (event) => {
    if (!event.target.matches('.company')) {
      setCompanyOpen(false);
    }
  };
  const [isoperationOpen, setoperationOpen] = useState(false);
  const toggleoperation = () => {
    setoperationOpen((prevState) => !prevState);
  };
  const closeoperation = (event) => {
    if (!event.target.matches('.operation')) {
      setoperationOpen(false);
    }
  };
  const [istravelmapOpen, settravelmapOpen] = useState(false);
  const toggletravelmap = () => {
    settravelmapOpen((prevState) => !prevState);
  };
  const closetravelmap = (event) => {
    if (!event.target.matches('.travelmap')) {
      settravelmapOpen(false);
    }
  };
  const [isanalysisOpen, setanalysisOpen] = useState(false);
  const toggleanalysis = () => {
    setanalysisOpen((prevState) => !prevState);
  };
  const closeanalysis = (event) => {
    if (!event.target.matches('.analysis')) {
      setanalysisOpen(false);
    }
  };
  const [isiconbutOpen, seticonbutOpen] = useState(false);
  const toggleiconbut = () => {
    seticonbutOpen((prevState) => !prevState);
  };
  const closeiconbut = (event) => {
    if (!event.target.matches('.iconbut')) {
      seticonbutOpen(false);
    }
  };
  
  return (
    <div>
      <header>
        <icon className="iconbut">
          <div onClick={toggleiconbut} className="iconbut" >
            {isiconbutOpen ? <i class="bi bi-chevron-up" style={{color:"black",marginTop:"8px"}}></i> : <i class="bi bi-chevron-down" style={{color:"black",marginTop:"8px"}}></i>}
            <div className='icon-container'style={{display:"flex",float:"left",marginRight:"10px",float:"right"}}><img src='/logo512.png' className='round-icon'/></div>
            <b style={{float:"right",marginRight:"10px"}}>{isiconbutOpen ? `TSM1` : 'TSM1'}</b>
            <div style={{fontSize:"15px",marginTop:"-5px",float:"right",marginRight:"10px"}}>{isiconbutOpen ? ` ดูเส้นทางเดินรถ `: ' ดูเส้นทางเดินรถ ' }</div>
          </div>
          {isiconbutOpen && (
            <div id="myiconbut" className="iconbut-content" style={{marginLeft:"20px"}}>
              <div style={{marginTop:"10px"}}><a href="#home" >Home</a></div>
              <div style={{marginTop:"10px"}}><a href="#about" >About</a></div>
            </div>
          )}
        </icon>
        <div style={{float:"right",marginTop:"17px"}}>
          <a href="/Message" ><div className='iconcontainer'style={{float:"left",float:"right"}}>
          <i class="bi bi-chat-dots" style={{fontSize:"15px",marginLeft:"5px",marginTop:"1px"}}></i></div></a>
          <div className='iconcontainer'style={{float:"left",float:"right"}}><i class="bi bi-bell" style={{fontSize:"15px",marginLeft:"5px",marginTop:"1px"}}></i></div>
        </div>
      </header>
      <menu>
          <div style={{textAlign:"center"}}>
            <div className='heardetal'><b>TSM</b></div>
          </div> 
          <div className="company">
            <div onClick={toggleCompany} className="company button">
              <i class="bi bi-building"></i>
              {isCompanyOpen ? ` บริษัท `: ' บริษัท ' }
              {isCompanyOpen ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>}
            </div>
              {isCompanyOpen && (
              <div id="mycompany" className="company-content">
                <div style={{marginTop:"5px"}}><a href="#home" >Home</a></div>
                <div style={{marginTop:"5px"}}><a href="#about" >About</a></div>
              </div>
            )}
          </div>
          <div className="operation">
            <div onClick={toggleoperation} className="operation button" >
              <i class="bi bi-grid"></i>
              {isoperationOpen ? ' การเดินรถ ' : ' การเดินรถ '}
              {isoperationOpen ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>}
            </div>
              {isoperationOpen && (
                <div id="myoperation" className="operation-content">
                  <div style={{marginTop:"5px"}}><a href="/Schedule" >ตารางการเดินรถ</a></div>
                  <div style={{marginTop:"5px"}}><a href="/Managethebusschedule" >จัดการตารางการเดินรถ</a></div>
                </div>
              )}
          </div>
          <div className="travelmap">
            <div onClick={toggletravelmap} className="travelmap button">
              <i class="bi bi-list-task"></i>
              {istravelmapOpen ? ' แผนที่การเดินทาง ' : ' แผนที่การเดินทาง '}
              {istravelmapOpen ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>}
            </div>
            {istravelmapOpen && (
              <div id="mytravelmap" className="travelmap-content" >
                {/* <div style={{marginTop:"5px"}}><Link to="/Schedule">แผนที่การเดินรถ</Link> </div> */}
                <div style={{marginTop:"5px"}}><a href="/Drivingmap" style={{color:"white"}} >แผนที่การเดินรถ</a></div>
                <div style={{marginTop:"5px"}}><a href="/Managetheroadmap" >จัดการแผนที่การเดินรถ</a></div>
              </div>
            )}
          </div>
          <div className="analysis">
            <div onClick={toggleanalysis} className="analysis button">
              <i class="bi bi-pie-chart"></i>
              {isanalysisOpen ? ' การวิเคราะห์ ' : ' การวิเคราะห์ '}
              {isanalysisOpen ? <i class="bi bi-chevron-up"></i> : <i class="bi bi-chevron-down"></i>}
            </div>
            {isanalysisOpen && (
              <div id="myanalysis" className="analysis-content">
                <div style={{marginTop:"5px"}}><a href="/Carinformation" >ข้อมูลรถ</a></div>
                <div style={{marginTop:"5px"}}><a href="/Driverinformation" >ข้อมูลพนักงานขับรถ</a></div>
                <div style={{marginTop:"5px"}}><a href="/Travelinformation" >ข้อมูลการเดินทาง</a></div>
                <div style={{marginTop:"5px"}}><a href="/Safetyinformation" >ข้อมูลความปลอดภัย</a></div>
              </div>
            )}
          </div>
          <div className='logout'>
            <i class="bi bi-box-arrow-in-right"></i><span>  ออกจากระบบ</span>
          </div>
      </menu>


      <div >
        <body className='body' style={{marginLeft:"5%"}} >
          <div><p style={{fontSize:"25px",marginLeft:"50px"}}><b>ข้อความ</b></p></div>

          <div className='Message' style={{marginTop:"-10px"}}>

            <div className='Messagedata'><p style={{marginLeft:"15px",marginRight:"15px"}} className='spean'><b>ข้อความทั้งหมด</b><span style={{backgroundColor:"rgb(240, 240, 240)",padding:"0px 5px 0px 5px",borderRadius:"5px"}}>4</span></p></div>

            <div className='Messagedata'>
              <div className='icon-container 'style={{display:"flex",float:"left",marginRight:"10px",marginTop:"10px",marginLeft:"10px"}}><img src='/logo512.png' className='round-icon'/></div>
              <p className='spean' style={{marginRight:"20px",marginTop:"10px"}}><b>พนักงานขับรถคนที่ 00 </b><spen style={{marginTop:"10px"}}><i class="bi bi-telephone-fill" style={{marginRight:"10px",cursor:"pointer"}}></i> <i class="bi bi-three-dots" style={{cursor:"pointer"}}></i></spen></p>    
              <p style={{fontSize:"12px",marginTop:"-30px",marginLeft:"5px",paddingBottom:"0px"}}>พนักงานขับรถคนที่ 3</p>
            </div>
            <div className='Messagedata' >
              <div style={{width:"90%",marginLeft:"5%"}}>
                <div><input className='inputdata' style={{marginTop:"10px",width:"95%"}} placeholder="Search..."></input></div>
                <div className='messagepeople' >
                  <div className='icon-container'style={{display:"flex",float:"left",marginRight:"5px",marginTop:"8px",marginLeft:"5px"}}><img src='/logo512.png' className='round-icon'/></div>
                  <p style={{fontSize:"14px",marginTop:"5px",marginLeft:"5px",paddingTop:"5px"}}><b>พนักงานขับรถคนที่ 1</b></p>
                  <p style={{fontSize:"12px",marginTop:"-15px",marginLeft:"5px",paddingBottom:"10px"}}>พนักงานขับรถคนที่ 1</p>
                </div>
                <div className='messagepeople' >
                  <div className='icon-container'style={{display:"flex",float:"left",marginRight:"5px",marginTop:"5px",marginLeft:"5px"}}><img src='/logo512.png' className='round-icon'/></div>
                  <p style={{fontSize:"14px",marginTop:"5px",marginLeft:"5px",paddingTop:"5px"}}><b>พนักงานขับรถคนที่ 2</b></p>
                  <p style={{fontSize:"12px",marginTop:"-15px",marginLeft:"5px",paddingBottom:"5px"}}>พนักงานขับรถคนที่ 2</p>
                </div>
                <div  className='messagepeople'>
                  <div className='icon-container'style={{display:"flex",float:"left",marginRight:"5px",marginTop:"5px",marginLeft:"5px"}}><img src='/logo512.png' className='round-icon'/></div>
                  <p style={{fontSize:"14px",marginTop:"5px",marginLeft:"5px",paddingTop:"5px"}}><b>พนักงานขับรถคนที่ 3</b></p>
                  <p style={{fontSize:"12px",marginTop:"-15px",marginLeft:"5px",paddingBottom:"5px"}}>พนักงานขับรถคนที่ 3</p>
                </div>
              </div>
            </div> 

            <div className='Messagedata5'>
              <div style={{width:"100%",height:"100%"}}>

                <div style={{width:"100%",float:"left",marginTop:"15px"}}> 
                  <p class="timeleft5">คนขับรถ</p><br></br>
                  <div class="container5"> 
                    <p>Hello. How are you today?</p>
                  </div>
                  <div style={{width:"100%",float:"left",marginLeft:"20px",marginTop:"-10px"}}>
                  <span class="time-left">11:01</span>
                  </div> 
                </div>
            

                <div style={{width:"100%",float:"left"}}>
                  <div class="container darker">
                    <p>Hey! I'm fine. Thanks for asking!</p>
                  </div>
                  <div style={{width:"100%",float:"right",marginRight:"15px" ,marginTop:"-30px"}}>
                    <span class="time-right" >11:01</span>
                  </div> 
                </div>
                

                <div style={{width:"100%",float:"left",marginTop:"10px"}}> 
                  <p class="timeleft5">คนขับรถ</p><br></br>
                  <div class="container5"> 
                    <p>Hello. How are you today? Hey! I'm fine. Thanks for asking!</p>
                  </div>
                  <div style={{width:"100%",float:"left",marginLeft:"20px",marginTop:"-10px"}}>
                  <span class="time-left">11:02</span>
                  </div> 
                </div>

                <div style={{width:"100%",float:"left"}}>
                  <div class="container darker">
                    <p>Hey! I'm fine. Thanks for asking! Hey! I'm fine. Thanks for asking! Hey! I'm fine. Thanks for asking!</p>
                  </div>
                  <div style={{width:"100%",float:"right",marginRight:"15px" ,marginTop:"-30px"}}>
                    <span class="time-right">11:02</span>
                  </div> 
                </div>
  
                <div style={{width:"100%",float:"left",marginTop:"10px"}}> 
                  <p class="timeleft5">คนขับรถ</p><br></br>
                  <div class="container5"> 
                    <p>Hello. How are you today?</p>
                  </div>
                  <div style={{width:"100%",float:"left",marginLeft:"20px",marginTop:"-10px"}}>
                  <span class="time-left">11:03</span>
                  </div> 
                </div>

              </div>
              <div style={{width:"100%",height:"23%"}}>
                <div className='line'></div>
                <div >
                  <input className='inputdata' style={{margin:"10px",width:"85%",float:"left"}} placeholder="Type something here..."></input>
                  <button className='sendbutton' style={{margin:"10px",float:"left"}}><i class="bi bi-send"></i></button>
                </div>
              </div>
            </div>

          </div><br></br>
        </body>



      </div>

    </div>
  );
};
export default Message;