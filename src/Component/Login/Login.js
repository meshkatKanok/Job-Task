import React, { useContext, useState } from 'react';
import imagelogo from '../../img/ultimate hrm logo-05-02 5.png';
import logo from '../../img/istockphoto-1321277096-612x612 1.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Authprovider/Authprovider';
import toast from 'react-hot-toast';
import useToken from '../useToken/useToken';

const Login = () => {
    const {signin}=useContext(AuthContext)
    const [email,setEmail]=useState()
    const navigate=useNavigate()
    const [token]=useToken(email)
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    if(token){
        navigate('/attendence')
      }
    const loginUpHandle=data=>{
        setEmail(data.email)
        signin(data.email,data.password)
        .then(curreuser=>{
            toast.success('Successfully Login')
            navigate('/attendence')
            reset()
          console.log(data.email);
          const user=curreuser.use
       
        })
        const userInfo={
            email:data.email,
            password:data.password
        }


        fetch(`https://test.nexisltd.com/login`,{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(userInfo)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            if(data.acknowledged){
                toast.success('Successfully Login')
               navigate('/attendence')
            }
          })
    
    
      };

    
    return (
        <div>


        <div className="card w-full bg-[#FFFFFF]">
          <div className="hero min-h-screen flex justify-around">  
          <img className='w-40 h-16 absolute top-16 lg:left-14 sm:left=[200px] ' src={imagelogo}/> 
          <div className="hero-content flex-col lg:flex-row-reverse hidden lg:block">
            <img src={logo}/>
            <div className="text-center lg:text-left"> 
            </div>
          </div>
        
          <div className="card rounded-none shadow-2xl bg-base-100 p-10 lg:h-[630px] lg:w-[516px]">
              <div className="card-body">
                <h1 className='text-xl font-bold text-center'style={{marginTop:'50px'}} >Log in Form</h1>
               <form onSubmit={handleSubmit(loginUpHandle)}>
            
             <div className="form-control">
               <input type="email" {...register("email")}
                placeholder="Write Email address" className="input  border-b-2 rounded-none  focus:outline-none" style={{borderBottomColor:'#B4B4B4',marginTop:'70px'}} />
             </div>
         
                
              
           
                    <div className="form-control">
               <input type="password" {...register("password",{ required:"password is require",
          minLength:{value:8,message:"Password must be 8 long character"}
         })}
                placeholder="Write password" className="input  border-b-2 rounded-none  focus:outline-none" style={{borderBottomColor:'#B4B4B4',marginTop:'70px'}} />
                 {
          errors.password && <span className='text-red-500 mb-0 mt-0' style={{color:'#7E7E7E'}}>{errors.password.message}</span>
      }
             </div>
             <div className='flex justify-center mt-10'>
                        < input type='submit' className="btn  btn-primary text-white rounded-2xl px-8  normal-case hover:bg-white  " value='Log In' style={{background:'#1678CB'}}/>
                        </div>
                        
       
               </form>
               <span className='lg:ml-[120px]' style={{fontSize:"12px",color:'#7E7E7E',marginTop:'50px'}}>Don't havne an account? <Link style={{fontSize:'14px'}} to='/signup' className='underline font-bold text-[#1678CB]'>SIGNUP HERE!</Link></span>
               
              </div>
            </div>
        </div>
            
        <div>
         
               </div>
        </div>
        
                    
                </div>
    );
};

export default Login;