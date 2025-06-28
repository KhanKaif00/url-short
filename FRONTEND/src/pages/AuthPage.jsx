import React, { useState } from 'react'
import LoginForm from '../components/loginForm'
import RegisterForm from '../components/RegisterForm'


const AuthPage = () => {
   
    const [login, setLogin] = useState(true)

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      { login ? <LoginForm setLogin ={setLogin}  /> : <RegisterForm  setLogin={setLogin} />}     

      </div>

    </div>
  )
  
}

export default AuthPage