import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigation = useNavigate();
  useEffect(()=>{
    setTimeout(() => {
      navigation("/")
    }, 5000);
  },[navigation])

  return (
    <div>
      <img style={{width:"100%", height:"100vh"}} src="https://img.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788955.jpg?t=st=1728031942~exp=1728035542~hmac=453b93ffaaf90d3475da89e2baa1f89b2949232e46a94567b838e493789e460e&w=740" alt="" />
    </div>
  )
}
