import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed w-full h-screen z-[2]'>
    <nav className='absolute w-full top-[5%] text-zinc-600 flex justify-center font-semibold py-10 text-lg'>Documents.</nav>
      <h1 className='absolute text-zinc-900 font-semibold text-[20vh] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>Docs.</h1>
    </div>
    </>
  )
}

export default Background