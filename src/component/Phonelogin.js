// import './phonemain.css'
import React from 'react';

const Phoneindex = () => {
  return (
    <div>
         <div style={{fontSize:"35px"}}>
            <div style={{marginLeft:"20px",marginTop:"20px"}}><a href='/Phoneindex'>
                <i class="bi bi-arrow-left-circle-fill"></i>
            </a></div>
        </div>
        <div> 
            <div style={{color:"black",fontSize:"25px",padding:"0px 0px 0px 30px"}}>
                <div>
                <p style={{marginBottom:"0px",marginTop:"10px",fontSize:"30px"}}><b>Transport Safety </b></p>
                <p style={{marginBottom:"0px",marginTop:"0px",fontSize:"30px"}}><b>Management</b></p>
                </div>
                <div><p style={{marginTop:"0px",fontSize:"18px"}}>ระบบบริหารความปลอดภัยด้านการขนส่ง</p></div>
            </div>
        </div>

        <div>
            <div style={{display:"grid",placeItems:"center",marginTop:"100px"}}>
                <input style={{borderRadius:"30px",padding:"15px 15px 15px 15px",width:"70%",fontSize:"16px",border:"1px solid rgb(206, 203, 203)"}} placeholder='ชื่อผู้ใช้'></input>
                <input style={{borderRadius:"30px",padding:"15px 15px 15px 15px",width:"70%",marginTop:"10px",fontSize:"16px",border:"1px solid rgb(206, 203, 203)"}} placeholder='รหัสผ่าน'></input>
            </div>
        </div>
        <div>
            <div style={{display:"grid",placeItems:"center",marginTop:"80px"}}>
                <button style={{borderRadius:"30px",padding:"15px 15px 15px 15px",width:"80%",fontSize:"16px",backgroundColor:"black",color:"white"}}><a href='/Phonechoose'><b>เข้าสู่ระบบ</b></a></button>
            </div>
        </div>


    </div>
  );
};
export default Phoneindex;