import React, { useEffect, useState } from 'react';
import sidelogo from '../../img/ultimate hrm logo-05-02 5.png'

const Attendence = () => {
    const [attenData,setAttenData]=useState()
    useEffect(()=>{
        fetch('Attendence.json')
        .then(res=>res.json())
        .then(data=>{
            setAttenData(data[0])})
    },[])
    return (
        <div>
            <img src={sidelogo} className='w-[164px] h-[60px] lg:absolute   lg:top-[50px] lg:left-[56px]  mx-auto'/>
            <div className='lg:mt-[122px] mt-5 mx-auto rounded-md lg:w-[480px] w-4/5 p-5 lg:p-0 '  style={{background:'#1678CB',height:'75px'}}>
            <h1 className='text-center lg:text-[36px]  text-white font-semibold'>Attendence information </h1>

            </div>
            <div className="card lg:w-4/5 mx-auto bg-base-100 shadow-xl mt-[60px]">
            <div className="overflow-x-auto">
  <table className="table w-full  mx-auto">
    <thead>
      <tr>
        <th>Date</th>
        <th>Employee Name</th>
        <th>Status</th>
        
      </tr>
    </thead>
    <tbody>
        <tr>
             <td>11/7/16</td>
            <td>Arlena McCoy</td>
            <td>present</td>
          </tr>
        <tr>
             <td>2/11/12</td>
            <td>Eleanor</td>
            <td>Absent</td>
          </tr>
        <tr>
             <td>4/21/22</td>
            <td>Wade Warren</td>
            <td>present</td>
          </tr>
        <tr>
             <td>4/21/22</td>
            <td>Wade Warren</td>
            <td>Absent</td>
          </tr>
        <tr>
             <td>4/21/22</td>
            <td>Wade Warren</td>
            <td>present</td>
          </tr>
        <tr>
             <td>4/21/22</td>
            <td>Jacob jones</td>
            <td>Absent</td>
          </tr>
        <tr>
             <td>4/21/22</td>
            <td>Wade Warren</td>
            <td>present</td>
          </tr>
        <tr>
             <td>4/21/22</td>
            <td>Darlena</td>
            <td>Absent</td>
          </tr>
        <tr>
             <td>4/21/22</td>
            <td>present</td>
            <td>present</td>
          </tr>
        <tr>
             <td>4/21/22</td>
            <td>Darlena Robertson</td>
            <td>Absent</td>
          </tr>
        
    
      
    </tbody>
  </table>
</div>
 
  
</div>
        </div>
    );
};

export default Attendence;