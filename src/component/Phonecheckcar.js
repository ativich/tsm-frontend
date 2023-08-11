// import './phonemain.css'
import React from 'react';

const Phonecheckcar = () => {
  return (
    <div>
      <div style={{fontSize:"35px",boxShadow:"0 3px 3px rgb(0,0,0,0.3)"}}>
        <div style={{marginLeft:"20px",marginTop:"20px"}}><a href='/Phonetablecheckcar'>
          <i class="bi bi-arrow-left-circle-fill"></i></a>
          <span style={{textAlign:"center",marginLeft:"25%",fontSize:"20px"}}><b>การตรวจสภาพรถ</b></span>
        </div>
      </div>


      <div className='' style={{marginTop:"30px",width:"100%",display:"grid",placeItems:"center"}}> 
        <div style={{marginTop:"0px",width:"85%"}} className='boxcheck'>
            <div><b>ผลการตรวจสภาพรถ</b></div>
            <div ><i class="bi bi-car-front"></i> รถคันที่ 1</div>
            <div ><i class="bi bi-check-circle" style={{color:"green"}}></i> ผ่านการตรวจ</div>
            <div ><i class="bi bi-clock"></i> 08:05 น. 13/03/2565</div>
        </div>

        <div style={{marginTop:"30px",width:"85%"}} className='boxcheck'>
            <div><b>กรณีไม่ผ่านการตรวจสภาพรถ</b></div>
            <textarea name="" id="" cols="45" rows="6" style={{borderRadius:"10px",backgroundColor:"rgb(240 240 240)",border:"none"}}></textarea>
            <div><b>รายการที่ไม่ผ่าน</b></div>
            <div>
                <div className='boxcheck0'>รายการ 1</div>
                <div className='boxcheck0'>รายการ 2</div>
                <div className='boxcheck0'>รายการ 3</div>
                <div className='boxcheck0'>รายการ 4</div>
                <div className='boxcheck0'>รายการ 5</div>
                <div className='boxcheck0'>รายการ 6</div>
                <div className='boxcheck0'>รายการ 7</div>
                <div className='boxcheck0'>รายการ 8</div>
            </div><br></br><br></br><br></br>
            <div><b>หมายเหตุ</b></div>
            <textarea name="" id="" cols="45" rows="6" style={{borderRadius:"10px",backgroundColor:"rgb(240 240 240)",border:"none"}}></textarea>
        </div>


      </div>

      <div>
        <div style={{display:"grid",placeItems:"center",marginTop:"100px"}}>
          <button style={{borderRadius:"30px",padding:"10px 10px 10px 10px",width:"70%",fontSize:"20px",backgroundColor:"black",color:"white"}}><a href='/Phonecheckcar'><b>ตกลง</b></a></button>
        </div>
      </div>
    </div>
  );
};
export default Phonecheckcar;