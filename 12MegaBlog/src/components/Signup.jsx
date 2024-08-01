import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, Logo } from './'
import {login} from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState('')
  const {register, handleSubmit} = useForm()

  const signup = async (data) => {
    setError('')
    try {
        const session = await authService.creatAccount(data)
        if (session) {
            const userData = authService.getCurrentUser()
            if (userData) dispatch(login(userData))
            navigate('/')
        }
    } catch (error) {
        setError(error.message)
    }
  }
  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo/>
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create an Account</h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Already have an account?&nbsp;
                <Link to="/login" className='font-medium text-primary transition-all duration-200 hover:underline'>
                    Sign In
                </Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
            <form onSubmit={handleSubmit(signup)} className='mt-8'>
                <div className="space-y-5">
                    <Input
                        label = "Full Name:"
                        placeholder = "Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <Input
                        label = "Email:"
                        placeholder = "Enter your email"
                        type = "email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                            }
                        })}
                    />
                    <Input
                        label = "Password:"
                        placeholder = "Enter your password"
                        type = "password"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <Button
                        type = "submit"
                        className = "w-full"
                        children = "Create Account"
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup