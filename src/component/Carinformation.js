import './main.css'
import React, { useState , PureComponent} from 'react';
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip, Legend,} from "recharts";

const data = [
  { name: "1",uv: 260},
  { name: "2",uv: 200},
  { name: "3",uv: 310},
  { name: "4",uv: 120},
  { name: "5",uv: 220},
  { name: "6",uv: 60},
  { name: "7",uv: 160},
  { name: "8",uv: 240},
  { name: "9",uv: 120},
  { name: "10",uv: 200},
  { name: "11",uv: 290},
  { name: "12",uv: 70},
  { name: "13",uv: 150},
  { name: "14",uv: 230},
  { name: "15",uv: 190},
  { name: "16",uv: 390},
  { name: "17",uv: 290},
  { name: "18",uv: 150},
  { name: "19",uv: 230},
  { name: "20",uv: 180},
  { name: "21",uv: 250},
  { name: "22",uv: 120},
  { name: "23",uv: 280},
  { name: "24",uv: 150},
  { name: "25",uv: 110},
  { name: "26",uv: 250},
  { name: "27",uv: 200},
  { name: "28",uv: 70},
  { name: "29",uv: 200},
  { name: "30",uv: 150},
];

const Carinformation = () => {
  const [isdataformatOpen, setdataformatOpen] = useState(false);
  const toggledataformat = () => {
    setdataformatOpen((prevState) => !prevState);
  };
  const closedataformat = (event) => {
    if (!event.target.matches('.dataformat')) {
      setdataformatOpen(false);
    }
  };
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
      <header >
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
                <div style={{marginTop:"5px"}}><a href="/Carinformation" style={{color:"white"}} >ข้อมูลรถ</a></div>
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

          <div className='' style={{marginTop:"50px"}}> 
            <div className='spean'>
              <div style={{backgroundColor:"rgb(255, 255, 255)",padding:"10px 15px 0px 15px",borderRadius:"5px",fontSize:"14px",color:"rgb(150, 150, 150)",height:"30px"}}><i class="bi bi-calendar4"></i> Dec 29,2023 - Jan 4,2024</div>
              
              <div className="dataformat" style={{cursor:"pointer"}}>
                <div onClick={toggledataformat} style={{backgroundColor:"rgb(255, 255, 255)",padding:"10px 15px 10px 15px",margin:"0px -5px -5px -5px",borderRadius:"5px",fontSize:"14px",color:"rgb(150, 150, 150)"}}>
                  {isdataformatOpen ? ` Daily `: ' Daily ' }
                  {isdataformatOpen ? <i class="bi bi-chevron-up" style={{ marginLeft: '10px' }}></i> : <i class="bi bi-chevron-down"style={{ marginLeft: '10px' }} ></i> }
                </div>
                {isdataformatOpen && (
                <div id="mydataformat" className="dataformat-content">
                  <div style={{marginTop:"5px"}}><a href="#home" >Home</a></div>
                  <div style={{marginTop:"5px"}}><a href="#about" >About</a></div>
                </div>
                )}
              </div>
              {/* <span style={{backgroundColor:"rgb(255, 255, 255)",padding:"10px 15px 5px 15px",borderRadius:"5px",fontSize:"14px",color:"rgb(150, 150, 150)"}}><b></b>5555</span> */}
            </div>
          </div>
          <div className='Messagedata'>
            <p style={{marginLeft:"15px",marginRight:"15px",padding:"30px 5px 10px 40px",fontSize:"20px"}}><b>ข้อมูลรถ</b></p>
            <BarChart width={900} height={400} data={data} margin={{top: 10,right: 30,left: 0,bottom: 30}}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              {/* <Legend /> */}
              {/* <Bar dataKey="pv" fill="#8884d8" /> */}
              <Bar dataKey="uv" fill="#4484d8" />
            </BarChart>
          </div>
          <div className='Messagedata'><p style={{marginLeft:"15px",marginRight:"15px",padding:"10px 5px 10px 5px"}}><br></br><br></br><br></br></p></div>
        </body>
      </div>
    </div>
  );
                
                
};

export default Carinformation;