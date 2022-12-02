import { useEffect, useState } from "react"

const useToken=email=>{
    const [token,setToken]=useState()
    useEffect(()=>{
        if(email){
        fetch(`https://test.nexisltd.com/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
          if(data.accesToken){
            localStorage.setItem('accessToken',data.accesToken)
         setToken(data.accesToken)
          }
  
        })
        }
    },[email])
    return [token]
}
export default useToken;