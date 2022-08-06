import React, { useEffect, useState } from "react";
import './navbar.css'
function Navbar() {
    const [show,handle]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handle(true);
            }else{
                handle(false)
            }
        });
        return()=>{
            window.removeEventListener("scroll");
        };  
    },[])
  return (
    <div className={`logo ${show && "bg__Black"}`}>
      <div className="nav__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Navbar;
