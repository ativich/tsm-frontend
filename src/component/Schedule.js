import './main.css'
import React, { useState } from 'react';

const Schedule = () => {
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
                  <div style={{marginTop:"5px"}}><a href="/Schedule" style={{color:"white"}}>ตารางการเดินรถ</a></div>
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


        <div >


          <body className='body' style={{marginLeft:"5%"}} >
            {/* <div className='' style={{marginTop:"30px",marginBottom:"-25px"}}> 
              <div className='spean'>
                <div style={{fontSize:"25px",marginTop:"-15px"}}>
                  <p style={{color:" rgb(100, 100, 100)"}}><b>ตารางการเดินรถ</b></p>
                </div>
                <div style={{fontSize:"16px"}}>
                  <p style={{color:" rgb(100, 100, 100)"}}><b>มีนาคม / <span style={{color:"blue"}}> 2566</span></b></p>
                </div>
              </div>
            </div> */}

            {/* <div style={{marginTop:"25px"}}>
              <div class="weekdays0">
                <div>จันทร์</div>
                <div>อังคาร</div>
                <div>พุธ</div>
                <div>พฤหัสบดี</div>
                <div>ศุกร์</div>
                <div>เสาร์</div>
                <div>อาทิตย์</div>
              </div>
              <div class="days0"> 
                <div class="days00">25</div>
                <div class="days00">26</div>
                <div class="days00">27</div>
                <div class="days00">28</div> 
                <div class="days00">1</div>
                <div class="days00">2</div>
                <div class="days00">3</div>
                <div class="days00">4<div className='days000'><b> สถานที่ปลายทาง 1</b> <label>ชนิดสินค้า : xxx </label>  <label>ประเภทรถ : xxx</label></div></div>
                <div class="days00">5</div>
                <div class="days00">6</div>
                <div class="days00">7</div>
                <div class="days00">8</div>
                <div class="days00">9</div>
                <div class="days00">10</div>
                <div class="days00">11</div>
                <div class="days00">12</div>
                <div class="days00">13</div>
                <div class="days00">14</div>
                <div class="days00">15</div>
                <div class="days00">16</div>
                <div class="days00">17<div className='days000'><b> สถานที่ปลายทาง 2</b> <label>ชนิดสินค้า : xxx </label>  <label>ประเภทรถ : xxx</label></div></div>
                <div class="days00">18</div>
                <div class="days00">19</div>
                <div class="days00">20</div>
                <div class="days00">21</div>
                <div class="days00">22</div>
                <div class="days00">23</div>
                <div class="days00">24</div>
                <div class="days00">25</div>
                <div class="days00">26</div>
                <div class="days00">27</div>
                <div class="days00">28<div className='days000'><b> สถานที่ปลายทาง 3</b> <label>ชนิดสินค้า : xxx </label>  <label>ประเภทรถ : xxx</label></div></div>
                <div class="days00">29</div>
                <div class="days00">30</div>
                <div class="days00">31</div>
              </div>
            </div>

            <div className='Messagedata'>
              <div><p style={{marginLeft:"15px",marginRight:"15px",marginBottom:"10px",padding:"10px 5px 0px 20px",fontSize:"20px"}}><b>บริษัท 1</b></p></div>
              <div className='line'></div>
              <div className='car' >
                <div>
                  <p><b>สถานที่ปลายทาง 1</b></p>
                  <input type='text' placeholder='ชื่อสถานที่ปลายทาง 1'></input>
                </div>
                <div>
                  <p><b>ชนิดสินค้า</b></p>
                  <select className='' id=""  placeholder="555">
                    <option value="">เลือกชนิด</option>
                    <option value=""></option>
                  </select>
                </div>
                <div>
                  <p><b>ประเภทรถ</b></p>
                  <select className='' id=""  placeholder="555">
                    <option value="">เลือกประเภทรถ</option>
                    <option value=""></option>
                  </select>
                </div>
                <div>
                  <p><b>เลือกรถ</b></p>
                  <select className='' id=""  placeholder="555">
                    <option value="">เลือกรถ</option>
                    <option value=""></option>
                  </select>
                </div><br></br>
                <div className='arrow-right'>
                  <div style={{float:"right"}}>
                    <i class="bi bi-arrow-right-square-fill"></i>
                  </div>
                </div>
              </div><br></br><br></br><br></br>
              
              
            </div> */}



            <dix>
              <div className='spean '>
                <div style={{marginTop:"20px",marginLeft:"-50px"}}>
                  <div className='spean mapleft'><b style={{fontSize:"16px"}}>สถานที่ต้นทาง</b><span><i style={{color:"green"}} class="bi bi-geo-alt"></i></span></div>
                  <div className='spean mapleft'><b style={{fontSize:"16px"}}>สถานที่ปลายทาง</b><span><i style={{color:"red"}} class="bi bi-geo-alt"></i></span></div>
                  <div className='spean mapleft'><b style={{fontSize:"16px"}}>จุดพักรถ</b><span><i style={{color:"blue"}} class="bi bi-geo-alt"></i></span></div>
                </div>
                <div className='mapright' style={{marginTop:"30px",marginRight:"-30px"}}>
                  <b>
                    <div>เวลาการเดินทาง : 10 ชัวโมง 30 นาที</div>
                    <div>ระยะทาง : 120 กิโลเมตร</div>
                    <div>จุดพักรถ : 2 จุด</div>
                  </b>
                </div>
              </div>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div className='mapcenter'>บันทึก</div>
              </div>
            </dix>
            





          </body>

        </div>



        {/* <div >
          <body className='body' style={{marginLeft:"5%"}} >
            <div className='' style={{marginTop:"30px",marginBottom:"-25px"}}> 
              <div className='spean'>
                <div style={{fontSize:"25px",marginTop:"-15px"}}>
                  <p style={{color:" rgb(100, 100, 100)"}}><b>ตารางการเดินรถ</b></p>
                </div>
                <div style={{fontSize:"16px"}}>
                  <p style={{color:" rgb(100, 100, 100)"}}><b>มีนาคม / <span style={{color:"blue"}}> 2566</span></b></p>
                </div>
              </div>
            </div>

            <div style={{marginTop:"25px"}}>
              <ul class="weekdays">
                <li>จันทร์</li>
                <li>อังคาร</li>
                <li>พุธ</li>
                <li>พฤหัสบดี</li>
                <li>ศุกร์</li>
                <li>เสาร์</li>
                <li>อาทิตย์</li>
              </ul>
              <ul class="days"> 
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li> 
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li><span class="active">10</span></li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
              </ul>
            </div>

          </body>
        </div> */}


        



        {/* <div >
          <body className='body' style={{marginLeft:"5%"}} >
            <div style={{marginTop:"40px"}}><p style={{fontSize:"22px"}}><b>ตารางการเดินรถ</b></p></div>
            <div className='Messagedata'>
              <p style={{marginLeft:"15px",marginRight:"15px",padding:"30px 5px 10px 40px",fontSize:"20px"}}><b>ข้อมูลการเดินทาง</b></p>
            
            </div>
            <div className='Messagedata'><p style={{marginLeft:"15px",marginRight:"15px",padding:"10px 5px 10px 5px"}}><br></br><br></br><br></br></p></div>
          </body>
        </div> */}

    </div>
  );
};
export default Schedule;