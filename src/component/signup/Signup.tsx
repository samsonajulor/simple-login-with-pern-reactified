import React, {useState} from 'react'
import axios from 'axios'


const url = 'http://localhost:3200/users'
// const url = 'https://login-with-pern.herokuapp.com/users'

function Signup() {

    const [data, setData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password1: '',
      password2: ''
    })


const style = {
    color: "#5E54A4",
  };
  const loginBtnStyle = {
    width: "100%",
    bordeRadius: "2px",
    color:'white',
    marginTop:10
  };

  function submit(e: any) {
    e.preventDefault();

    if (data.password1 !== data.password2) window.alert('Password do not match')
    
    const body = {
      firstname: data.firstname.toLowerCase().trim(),
      lastname: data.lastname.toLowerCase().trim(),
      email: data.email.toLowerCase().trim(),
      password: data.password1,
    };

    axios
      .post(url, body)
      .then((res: any) => {
        console.log(res.data, "this is the data");
        console.log(res, 'this is res header')
        const result = JSON.stringify(res.data)
        window.localStorage.setItem('user', result)
       window.alert('Successfully registered')
       window.location.href = '/dashboard'
      })
      .catch((error:any) => {
          console.log(error)
        window.alert('unsuccessful registration user may already please exist try to login with your pw')
      });
  }

  function handle(e: any) {
    const newdata: any = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  return (
    <div>
      <main>
        <div className='container'>
          <div className='form__container'>
            <form
              onSubmit={(e) => submit(e)}
              className='login__form'
              style={{ backgroundColor: 'white', borderRadius: '5px' }}
              id='myformstyle'
            >
              <h4 className='text-center' style={style}>
                User signup
              </h4>
              <div className='row'>
                <div>
                  <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                      Email address
                    </label>
                    <input
                      onChange={(e) => handle(e)}
                      id='email'
                      value={data.email}
                      type='email'
                      name='email'
                      className='form-control'
                      aria-describedby='emailHelp'
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                  Firstname
                </label>
                <input
                  onChange={(e) => handle(e)}
                  value={data.firstname}
                  type='firstname'
                  name='firstname'
                  id='firstname'
                  className='form-control'
                  required
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                Lastname
                </label>
                <input
                  onChange={(e) => handle(e)}
                  value={data.lastname}
                  type='lastname'
                  name='lastname'
                  id='lastname'
                  className='form-control'
                  required
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                  Password
                </label>
                <input
                  onChange={(e) => handle(e)}
                  value={data.password1}
                  type='password'
                  name='password1'
                  id='password1'
                  className='form-control'
                  aria-describedby='emailHelp'
                  required
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                  Confirm Password
                </label>
                <input
                  onChange={(e) => handle(e)}
                  value={data.password2}
                  type='password'
                  name='password2'
                  id='password2'
                  className='form-control'
                  aria-describedby='emailHelp'
                  required
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  name='register'
                  type='submit'
                  className='btn btn-primary submitbtncustom'
                  style={{ width: '100%', borderRadius: '2px' }}
                >
                  Sign Up
                </button>
              </div>
              <a
                href='/login'
                className='btn btn-success'
                style={loginBtnStyle}
              >
                Login
              </a>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
};

export default Signup