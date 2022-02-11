import React from 'react'
// import dummyPImage from 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
import './Dashboard.css'

function Dashboard() {
 let result:any = window.localStorage.getItem("user")
 let user = JSON.parse(result)
 console.log(user, 'user')
  return (
    <div className='profile'>
      <div className='profile__goBackText'>Profile</div>

      <div className='images'></div>

      <div className='profile__textName'>
        Welcome {user.data.firstname} {user.data.lastname}
      </div>
      <div className='profile__textDesc'>
        This is not your username or pin. This name will be visible to your
        WhatsApp contacts.
      </div>
      <div className='profile__text'>About</div>
      <div className='images'></div>
      <div className='profile__textAbout'>I am motivated</div>
      {/* <!-- text sections end --> */}
    </div>
  )
}

export default Dashboard