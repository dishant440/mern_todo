import React from 'react'
import {Input,Button} from './index'

export default function AddTodo() {
  return (
    <div className="flex justify-center items-center w-full mt-5">
      <div className="flex space-x-5">
        <Input className="w-96" />
        <Button Type="submit" value="Add Todo"/>
      </div>
    </div>
  )
}
