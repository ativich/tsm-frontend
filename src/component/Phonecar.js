// import './phonemain.css'
import React from 'react';
import { RadialBarChart, RadialBar, Legend } from "recharts";


const Phonecar = () => {
  const data = [
    {
      name: "เวลาเดินทาง 6h 5min/8h",
      uv: 200,
      // pv: ,
      // fill: "#a4de6c"
    },
    {
      name: `เวลาเฉลี่ย 1050/2000`,
      uv: 350,
      // pv: ,
      // fill: "#d0ed57"
    },
    {
      name: "ความเร็วเฉลี่ย 2015/6000",
      uv: 300,
      // pv: ,
      // fill: "#ffc658"
    }
  ];
  const data2 = [
    {
      name: "เวลาเดินทาง 6h 5min/8h",
      uv: 500,
      pv: 3908,
      fill: "#ffff"
    },
    {
      name: "เวลาเดินทาง 6h 5min/8h",
      uv: 250,
      pv: 3908,
      fill: "#a4de6c"
    }
  ];
const style = {
  top: 50,
  left: 250,
  lineHeight: "25px"
};

  return (
    <div>
      <div style={{fontSize:"35px",boxShadow:"0 3px 3px rgb(0,0,0,0.3)"}}>
        <div style={{marginLeft:"20px",marginTop:"20px"}}><a href='/PhoneChoosecar'>
          <i class="bi bi-arrow-left-circle-fill"></i></a>
          <span style={{textAlign:"center",marginLeft:"25%",fontSize:"20px"}}><b>รถคันที่ 1</b></span>
        </div>
      </div>

      <div className='daytime'>
        <select style={{color:"black",padding:"2px 2px 2px 10px",borderRadius:"10px",display:"inline",margin:"20px 10px -20px 10px"}}>
          <option value="a1">วันที่</option>
          <option value="b1">-</option>
          <option value="c1">-</option>
        </select>
      </div>


{/* 
      <div className='' style={{marginTop:"0px",width:"80%",marginLeft:"10%"}}> 
          <div className='spean'>
            <div style={{marginTop:"0px"}}>
              <div >
                <input style={{backgroundColor:"black",color:"white",padding:"5px 40px 5px 10px",borderRadius:"20px",display:"inline"}}></input>
              </div>
            </div>
            <div className='' >
              <select style={{backgroundColor:"black",color:"white",padding:"5px 5px 5px 15px",borderRadius:"20px",display:"inline"}}>
                <option value="a1">ประเภทรถ</option>
                <option value="b1">-</option>
                <option value="c1">-</option>
              </select>
            </div>
          </div>
      </div> */}

      <div>
        <RadialBarChart width={250} height={230} cx={120} cy={110} innerRadius={20} outerRadius={140} barSize={10} data={data}>
          <RadialBar minAngle={15} label={{ position: "insideStart", fill: "#fff" }} background clockWise dataKey="uv"/>
          <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style}/>
        </RadialBarChart>
      </div>


      <div style={{marginTop:"20px",width:"100%",display:"grid",placeItems:"center"}}>
        <div style={{marginTop:"0px",width:"85%"}} className='box3item'>
          <div style={{textAlign:"center",fontSize:"25px",paddingTop:"15px"}}><b>120</b>
            <p style={{margin:"0px",fontSize:"12px"}}>จำนวนการส่งสินค้าสำเร็จ</p>
          </div>
          <div style={{textAlign:"center",fontSize:"20px",paddingTop:"30px"}}><b>2 ปี 9 เดือน</b>
            <p style={{margin:"0px",fontSize:"12px"}}>อายุการใช้งานรถ</p>
          </div>
          <div>
            <RadialBarChart width={100} height={80} cx={60} cy={40} innerRadius={10} outerRadius={50} barSize={7} data={data2}>
              <RadialBar minAngle={15} label={{ position: "insideStart", fill: "#fff" }} background clockWise dataKey="uv"/>
            </RadialBarChart>
            <p style={{margin:"0px",fontSize:"12px",textAlign:"center"}}>อายุการใช้งานรถ</p>
          </div>
        </div>
      </div>


      <div className='' style={{marginTop:"0px",width:"80%",marginLeft:"10%"}}> 
        <a href='/Phonecar'>
          <div className='spean'>
            <div style={{marginTop:"20px"}}>
              <div style={{fontSize:"70px",backgroundColor:"black",color:"white",padding:"0px 10px 0px 10px",borderRadius:"10px",display:"inline"}}>
                <i class="bi bi-truck"></i>
              </div>
            </div>
            <div className='' style={{fontSize:"16px",color:"black"}}>
              <p style={{margin:"0px"}}><b>รถคันที่ 1</b></p>
              <p style={{margin:"0px"}}>ประเภท : รถกระบะบรรทุก</p>
              <p style={{margin:"0px"}}>ทะเบียน : 1 กจ 1011 มหาสารคาม </p>
              <p style={{margin:"0px"}}>พรบ : พนักงานขับรถคนที่ 1 </p>
              <p style={{margin:"0px"}}>ชื่อประกัน : พนักงานขับรถคนที่ 1</p>
              <p style={{margin:"0px"}}>ยี่ห้อยาง : ชื่อยาง 1</p>
              <p style={{margin:"0px"}}>น้ำมัน : ชื่อนน้ำมัน 1</p>
            </div>
          </div>
        </a>
      </div>

      <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
        <div className='line0'></div>
      </div>

      <div className='' style={{marginTop:"0px",width:"80%",marginLeft:"10%"}}> 
        <a href='/Phonecar'>
          <div className='spean'>
            <div style={{marginTop:"20px"}}>
              <div style={{fontSize:"70px",backgroundColor:"black",color:"white",padding:"0px 10px 0px 10px",borderRadius:"10px",display:"inline"}}>
              <i class="bi bi-person-fill"></i>
              </div>
            </div>
            <div className='' style={{fontSize:"16px",color:"black",paddingRight:"45px"}}>
              <p style={{margin:"0px"}}><b>คนขับรถ</b></p>
              <p style={{margin:"0px"}}>ชื่อ : ชื่อ 1</p>
              <p style={{margin:"0px"}}>นามสกุล : นามสกุล 1</p>
              <p style={{margin:"0px"}}>อายุ : 40</p>
              <p style={{margin:"0px"}}>โรคประจำตัว : ไม่มี</p>
              <p style={{margin:"0px"}}>ประสบการณ์ : 2 ปี 8 เดือน </p>
              <p style={{margin:"0px"}}>ใบขับขี่ : มี</p>
            </div>
          </div>
        </a>
      </div>

      {/* <div style={{display:"grid",placeItems:"center"}}>
       <div className='login'><a href='/Phonelogin'><b style={{color:"black"}}>เข้าสู่ระบบ</b></a></div>
      </div>
      <div style={{display:"grid",placeItems:"center"}}>
       <div className='login'><a href='/Phonelogin'><b style={{color:"black"}}>เข้าสู่ระบบ</b></a></div>
      </div> */}

      <div>
        <div style={{display:"grid",placeItems:"center",marginTop:"10px"}}>
          <button style={{borderRadius:"30px",padding:"15px 15px 15px 15px",width:"80%",fontSize:"16px",backgroundColor:"black",color:"white"}}><a href='/Phonetablecar'><b>เช็ครถ</b></a></button>
        </div>
      </div>
      <div>
        <div style={{display:"grid",placeItems:"center",marginTop:"10px"}}>
          <button style={{borderRadius:"30px",padding:"15px 15px 15px 15px",width:"80%",fontSize:"16px",backgroundColor:"black",color:"white"}}><a href='/Phonetableperson'><b>เช็คพนักงานขับรถ</b></a></button>
        </div>
      </div>


    </div>
  );
};
export default Phonecar;