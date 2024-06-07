import React from 'react'
import {Input,Button} from './index'

export default function AddTodo() {
  return (
    <div className="flex justify-center items-center w-full mt-5">
      <div className="flex space-x-5 mt-5">
        <Input className="w-96" Placeholder="Add Task" />
        <Button Type="submit" value="Add Task"/>
      </div>
    </div>
  )
}
