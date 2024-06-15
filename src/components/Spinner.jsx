import { Triangle } from 'react-loader-spinner'
import React from 'react'
import './spinner.css'

export const Spinner = () => {
  return (
    <div className='triangle'>
        <Triangle
            visible={true}
            height="200"
            width="200"
            color="#48a9b6"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
  )
}