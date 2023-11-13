import React from 'react'
import './Navbar.css'
window.addEventListener('scroll',()=>{
 if(window.scrollY<=50)
      document.getElementById('nav').style.backgroundColor='#44373707'
  else
    document.getElementById('nav').style.backgroundColor='black'

})
function Navbar() {
  var dropdown=true
  return (
    <div className="row">
    <div className="col-12">
    <div className='nav' id='nav'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className='logo' alt="Netflix" />
    <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" className='avtar' alt="Avthar" />  
    <img src="dropdown.png" className='dropdown'alt='drpdown' onClick={(e)=>{
      if(dropdown){
        e.target.style.transform='rotate(180deg)' 
        dropdown=false
      }
      else{
        e.target.style.transform='rotate(0deg)' 
        dropdown=true
      }
        

    }} />  
    </div>
    </div>
    </div>
    
  )
}

export default Navbar
