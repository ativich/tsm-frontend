import './main.css'
import React, { useState } from 'react';

const Homepage = () => {
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
          {/* <div style={{float:"right",}}><i  class="bi bi-chevron-down"></i></div>
          <div className='icon-container' style={{display:"flex",float:"left",marginRight:"10px",float:"right"}}><img src='/logo512.png' className='round-icon'/></div>  */}
        </icon>
        <div style={{float:"right",marginTop:"17px"}}>
          <a href="/Message" ><div className='iconcontainer'style={{float:"left",float:"right"}}>
          <i class="bi bi-chat-dots" style={{fontSize:"15px",marginLeft:"5px",marginTop:"1px"}}></i></div></a>
          <div className='iconcontainer'style={{float:"left",float:"right"}}><i class="bi bi-bell" style={{fontSize:"15px",marginLeft:"5px",marginTop:"1px"}}></i></div>
        </div>
      </header>
      {/* <Router> */}
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
                <div style={{marginTop:"5px"}}><a href="/Drivingmap" >แผนที่การเดินรถ</a></div>
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

        <body className='body'>
        </body>

    </div>
  );
};
export default Homepage;
  

// const Homepage = () => {
//     const [iscompanyOpen, setcompanyOpen] = useState(false);
//     const company = () => {
//         setcompanyOpen((prevState) => !prevState);
//     };
//     const closecompany = (event) => {
//         if (!event.target.matches('.company')) {
//         setcompanyOpen(false);
//         }
//     };
//     window.onclick = closecompany;
//     return (
//         <div>
//             <header>

//             </header>
//             <menu>
//                 <div className="company">
//                     <div onClick={company} className="company button" >บริษัท +</div>
//                     {iscompanyOpen && (
//                         <div id="mycompany" className="company-content">
//                             <a href="#home">Home</a>
//                             <a href="#about">About</a>
//                             <a href="#contact">Contact</a>
//                         </div>
//                     )}
//                 </div>
//             </menu>
//         </div>
//    )
// }
// export default Homepage