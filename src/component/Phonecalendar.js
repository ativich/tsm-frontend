import './main.css'
import React from 'react';

const Phonecalendar = () => {
  return (
    <div>
        <div style={{fontSize:"25px"}}>
            <div style={{marginLeft:"20px",marginTop:"20px",marginBottom:"10px"}}>
                <p style={{margin:"0px"}}><b>ตารางการเดินรถ</b></p>
            </div>
        </div>

        <div style={{width:"90%",marginLeft:"5%"}}>
            <div style={{backgroundColor:"black",color:"white",borderTopLeftRadius:"30px",borderTopRightRadius:"30px",padding:"10px 0px 10px 0px"}}>
                <div className='spean'>
                    <select style={{backgroundColor:"black",color:"white",padding:"5px 5px 5px 15px",fontSize:"20px",border:"none",margin:"1px",borderTopLeftRadius:"20px"}}>
                    <option value="a1">มีนาคม 2566</option>
                    <option value="b1">-</option>
                    </select>
                    <div className='spean' style={{paddingTop:"5px"}}>
                        <div style={{marginRight:"50px"}}><i class="bi bi-chevron-left"></i></div>
                        <div style={{marginRight:"20px"}}><i class="bi bi-chevron-right"></i></div>
                    </div>
                </div>  
            </div>
            <ul class="weekday">
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
                <li>Su</li>
            </ul>
            <ul class="day" style={{borderBottomLeftRadius:"30px",borderBottomRightRadius:"30px"}}>  
                <li></li>
                <li></li>
                <li></li>
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

        <div style={{fontSize:"16px"}}>
            <div style={{marginLeft:"20px",marginTop:"10px"}}>
                <p style={{margin:"0px"}}><b>ตารางการเดินรถ</b></p>
            </div>
        </div>







        <div className='foot'>
          <div className='box0' >
            <a href="/Phonecalendar" >
            <div style={{marginTop:"-15px",color:"blue"}}><i class="bi bi-calendar-range-fill"></i></div>
            <div style={{fontSize:"12px",color:"blue"}}>การเดินรถ</div></a>
          </div>
          <div className='box0'>
            <a href="/Phonemaps" ><div style={{marginTop:"-15px"}}><i class="bi bi-map-fill"></i></div>
            <div style={{fontSize:"12px"}}>แผนที่</div></a>
          </div>
          <div className='box0'>
            <a href="/Phonealert" ><div style={{marginTop:"-15px"}}><i class="bi bi-bell"></i></div>
            <div style={{fontSize:"12px"}}>การแจ้งเตือน</div></a>
          </div>
          <div className='box0'>
            <a href="/Phoneprofile" ><div style={{marginTop:"-15px"}}><i class="bi bi-person-circle"></i></div>
            <div style={{fontSize:"12px"}}>โปรไฟล์</div></a>
          </div>
        </div>
    </div>
  );
};
export default Phonecalendar;