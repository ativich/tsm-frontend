// import './phonemain.css'
import React from 'react';

const Phonetablecheckperson = () => {
  return (
    <div>
      <div style={{fontSize:"35px",boxShadow:"0 3px 3px rgb(0,0,0,0.3)"}}>
        <div style={{marginLeft:"20px",marginTop:"20px"}}><a href='/Phonetableperson'>
          <i class="bi bi-arrow-left-circle-fill"></i></a>
          <span style={{textAlign:"center",marginLeft:"20%",fontSize:"20px"}}><b>การตรวจสภาพคนขับรถ</b></span>
        </div>
      </div>
      <div className='daytime'>
        <select style={{color:"black",padding:"2px 2px 2px 10px",borderRadius:"10px",display:"inline",margin:"10px 10px 0px 10px"}}>
          <option value="a1">เลื่อน</option>
          <option value="b1">-</option>
          <option value="c1">-</option>
        </select>
      </div>


      {/* <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
        <div className='line0'></div>
      </div> */}

      <div className='' style={{marginTop:"10px",width:"100%"}}> 
        <div className='tablegridtest'>
            <div className='tablegridtest0' style={{textAlign:"center"}}>รายการเช็คพนักงานขับรถ</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}>ผ่าน</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}>ไม่ผ่าน</div>
        </div>

        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 1</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 2</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 3</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 4</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 5</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 6</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 7</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 8</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 9</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 10</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 11</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 12</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 13</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 14</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 15</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 16</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 17</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 18</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
        <div className='tablegridtest'>
            <div className='tablegridtest0'>รายการเช็คพนักงานขับรถ 19</div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
            <div className='tablegridtest0' style={{textAlign:"center"}}><input type="checkbox"  name="subscribe"></input></div>
        </div>
      </div>

      <div>
        <div style={{display:"grid",placeItems:"center",marginTop:"10px"}}>
          <button style={{borderRadius:"30px",padding:"5px 5px 5px 5px",width:"70%",fontSize:"20px",backgroundColor:"black",color:"white"}}><a href='#'><b>หน้าต่อไป</b></a></button>
        </div>
      </div>


    </div>
  );
};
export default Phonetablecheckperson;