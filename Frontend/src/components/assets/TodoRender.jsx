import React from 'react'
import Todo from './Todo'

export default function TodoRender() {
  return (
    <div className="flex justify-center items-center mt-5 mr-2 ">
      <div className="w-full max-w-6xl p-4 bg-white shadow-lg rounded-md h-96 overflow-y-auto scrollbar-thin scrollbar scrollbar-track-gray-100">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  )
}
