import React, { useContext } from 'react'
import { myContext } from './Context'

export default function Guest() {
    const data = useContext(myContext)
    console.log(data)
  return (
    <div>
    </div>
  )
}
