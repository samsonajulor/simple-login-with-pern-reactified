import React, { useState } from 'react'
import axios from 'axios'

// const url = 'http://localhost:3200/users/login'
const url = 'https://login-with-pern.herokuapp.com/users/login'

function Login() {
  const [data, setData] = useState({
    email: '',
    password1: ''
  })

  const style = {
    color: '#5E54A4',
  }
  const loginBtnStyle = {
    width: '100%',
    bordeRadius: '2px',
    color: 'white',
    marginTop: 10,
  }

  function submit(e: any) {
    e.preventDefault()

    const body = {
      email: data.email.toLowerCase().trim(),
      password: data.password1,
    }
    axios
      .post(url, body)
      .then((res: any) => {
        const result = JSON.stringify(res.data)
        window.localStorage.setItem('user', result)
        window.alert('Successfully registered')
        window.location.href = '/dashboard'
      })
      .catch((error: any) => {
        console.log(error)
        window.window.alert('Unsuccessful login')
      })
  }

  function handle(e: any) {
    const newdata: any = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
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
                User Login
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

              <div style={{ display: 'flex', justifyContent: 'center' }}></div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  name='login'
                  type='submit'
                  className='btn btn-primary submitbtncustom'
                  style={{ width: '100%', borderRadius: '2px' }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login
