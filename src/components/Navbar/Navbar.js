import React from 'react'
import './Navbar.css'
window.addEventListener('scroll',()=>{
 if(window.scrollY<=50)
      document.getElementById('nav').style.backgroundColor='#44373707'
  else
    document.getElementById('nav').style.backgroundColor='black'

})
function Navbar() {
  return (
    <div className="row">
    <div className="col-12">
    <div className='nav' id='nav'>
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className='logo' alt="Netflix" />
    <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" className='avtar' alt="Avthar" />  
    </div>
    </div>
    </div>
    
  )
}

export default Navbar
