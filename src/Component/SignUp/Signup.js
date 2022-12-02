import React, { useContext, useState } from 'react';
import logo from '../../img/istockphoto-1321277096-612x612 1.png';
import { FaArrowRight} from "react-icons/fa";
import imagelogo from '../../img/ultimate hrm logo-05-02 5.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Authprovider/Authprovider';
import toast from 'react-hot-toast';
import useToken from '../useToken/useToken';
 

const Signup = () => {
  const navigate=useNavigate()
  const {creatUser}=useContext(AuthContext)
    const [step,setStep]=useState(0)
    const [error,setError]=useState('');
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    const [token]=useToken(creatUser)
    if(token){
      navigate('/')
    }
  const signUpHandle = data =>{
    console.log(data);
    setError('')
    const {email,fristName,lastName,password,phone
    }=data
    const userInfo={
      email,
      fristName,
      lastName,
      password,
      phone
    }
    creatUser(email,password)
    .then(res=>{
      const user=res.user
      reset()
  toast.success('Successfully SignUp')
  navigate('/attendence')
    })
    .catch(e=>setError(e.message))
    fetch(`https://test.nexisltd.com/signup`,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(userInfo)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.acknowledged){
           navigate('/')
        }
      })


  };

    const handleBack=()=>{
        setStep(c=>c-1)
    }
   
    const handleStep=()=>{
        setStep(c=>c+1)
    }

    const renderbtn=()=>{
        if(step>1){
            return undefined
        }
        else{
            return(
                <div className='flex justify-center mt-10'>
                <button onClick={handleStep} type='button' className="btn  btn-primary text-white rounded-2xl px-8  normal-case hover:bg-white " style={{background:'#1678CB'}}>Next Step <FaArrowRight style={{height:'30px',marginTop:'2px',marginLeft:'7px',forcedColorAdjust:"white"}}/> </button>
                </div>
            )
           
        }
    }

    
    return (
        <div>


<div className="card w-full bg-[#FFFFFF]">
  <div className="hero min-h-screen flex justify-around">  
  <img className='w-40 h-16 absolute top-16 lg:left-14 sm:left-[200px] mx-auto' src={imagelogo}/> 
  <div className="hero-content hidden lg:block flex-col lg:flex-row-reverse">
    <img src={logo}/>
     
  </div>

  <div className="card rounded-none shadow-2xl bg-base-100 p-10 sm:w-full mt-[200px] lg:mt-[0px]  lg:h-[630px] lg:w-[516px]">
      <div className="card-body">
        <h1 className='text-xl font-bold text-center'style={{marginTop:'50px'}} >SignUp Form</h1>
       <form onSubmit={handleSubmit(signUpHandle)}> 
      {
        step === 0 &&  <section>
        <div className="form-control">
           <input type="text" placeholder="Write Frist Name"{...register("fristName")}
            className="input  border-b-2 rounded-none  focus:outline-none" style={{borderBottomColor:'#B4B4B4',marginTop:'70px'}} />
         </div>
         <div className="form-control">
           <input type="text" placeholder="Write Last Name" {...register("lastName")}
            className="input  border-b-2 rounded-none  focus:outline-none" style={{borderBottomColor:'#B4B4B4',marginTop:'70px'}} />
         </div>
        </section>
      }
      { step === 1 && (
        <section>
        <div className="form-controlflex">
        <input type="text" defaultValue={"+880"} className="input w-[70px] border-b-2 rounded-none focus:outline-none"
        style={{borderBottomColor:'#B4B4B4',marginRight:'5px',marginTop:'70px',color:'#B4B4B4'}} />
       <input type="text" placeholder="1xxxxxxxxxx"{...register("phone")}
        className="input lg:w-[295px] ms-5 w-[150px]  border-b-2 rounded-none  focus:outline-none" style={{borderBottomColor:'#B4B4B4'}} />
     </div>
     <div className="form-control">
       <input type="text" placeholder="Write Email address" {...register("email")}
         className="input  border-b-2 rounded-none  focus:outline-none" style={{borderBottomColor:'#B4B4B4',marginTop:'70px'}} />
     </div>
 
        <button onClick={handleBack} className='absolute bottom-[160px] mt-7 font-semibold text-[#767676] normal-case'>Back</button>       
    </section>
        
      )
        
      }
      {
        step === 2 && <section>
            <div className="form-control">
       <input type="password" placeholder="Write password"  {...register("password",{ required:"password is require",
          minLength:{value:8,message:"Password must be 8 long character"}
         })}className="input  border-b-2 rounded-none  focus:outline-none" style={{borderBottomColor:'#B4B4B4',marginTop:'70px'}} />
          {
          errors.password && <span className='text-red-500 mb-0 mt-0' style={{color:'#7E7E7E'}}>{errors.password.message}</span>
      }
     </div>
     {
                   error && <span className='text-red-400 p-5'>Your Email Already in Used</span>
                }
     <div className='flex justify-center mt-10'>
                <input type='submit' className="btn  btn-primary text-white rounded-2xl px-8  normal-case hover:bg-white " style={{background:'#1678CB'}} value='Sign Up'/>
                
                </div>
                {
                    step ===2 && <button onClick={handleBack} className='absolute lg:bottom-[285px] bottom-[165px] mt-7 font-semibold text-[#767676] normal-case'>Back</button>
                }

        </section>
      }
      {
        renderbtn()
       }
       </form>
       <span style={{fontSize:"12px",color:'#7E7E7E',marginTop:'50px'}}
       className='lg:ml-[120px] '
       >Already have an account? <Link style={{fontSize:'14px'}} to='/login' className='underline font-bold text-[#1678CB]'>LOGIN HERE!</Link></span>
       
      </div>
    </div>
</div>
    
<div>
 
       </div>
</div>

            
        </div>
    );
};

export default Signup;