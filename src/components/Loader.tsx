import React from 'react'
import { Circles } from 'react-loader-spinner'

const Loader = ({message}:{message:string}) => {
  return (
    <div className="flex h-screen flex-col justify-center items-center w-screen ">
    <Circles
      color="#00BFFF"
      height={50}
      width={200}
    />

    <p className="text-lg py-2 text-gray-600 text-center px-2">{message}</p>
  </div>
  )
}

export default Loader