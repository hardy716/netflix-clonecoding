import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'
import useAuth from '../hooks/useAuth'

interface Inputs {
  email: string
  password: string
}

function Login() {
  const [login, setLogin] = useState(false)
  const { signIn, signUp } = useAuth()
  
  const { 
    register, 
    handleSubmit, 
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    if (login) {
      await signIn(data.email, data.password)
    } else {
      await signUp(data.email, data.password)
    }
  }

  return (
    <div className='relative flex h-screen w-screen flex-col bg-black
    md:items-center md:justify-center
    lg:items-center lg:justify-center'>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      
      <img
        src="https://rb.gy/ulxxee"
        className="fixed left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      
      <form 
        className='relative mt-24 space-y-8 hover:bg-black rounded py-10 px-6 md:mt-0 md:max-w-md md:px-14'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='text-4xl font-semibold'>Sign In</h1>
        <div className='space-y-4'>
          <label className='inline-block w-full hover:text-black'>
          <input 
            type="email" 
            placeholder='Email' 
            className='input'
            {...register("email", {required: true})}
          />
          {errors.email && <p className='p-1 font-light text-yellow-300'>Please enter a valid email</p>}
          </label>
          <label className='inline-block w-full'>
          <input 
            type="password" 
            placeholder='Password' 
            className='input'
            {...register("password", {required: true})}
          />
          {errors.password && <p className='text-yellow-300'>Please enter a correct password</p>}
          </label>
        </div>

        <button 
          className='w-full rounded bg-red-600 py-3 font-semibold'
          onClick={() => setLogin(true)}
        >
          Sign In
        </button>

        <div className='text-gray-400'>
          New to Netflix?{' '}
          <button 
            type='submit' 
            className='text-white hover:underline'
            onClick={() => setLogin(false)}
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login