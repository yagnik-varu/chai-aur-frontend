import React from 'react'
import { useCookies } from "react-cookie";
import { useSelector } from 'react-redux';

function Home() {
  const [cookies, setCookie] = useCookies();
  // console.log(cookies)
  const user = useSelector((state)=>state.user);
  console.log("inside home",user.user)
  console.log()
  // setCookie("name","yagnik")
  // console.log(document.cookie)
  return (
    <div>
      {user.user?.email}
      {cookies.accessToken && <p>{cookies.accessToken}</p>}
    </div>
  )
}

export default Home
