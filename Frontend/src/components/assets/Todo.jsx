import React from 'react'

export default function Todo() {
  return (
    <div className="bg-yellow-200 flex flex-col p-4 mt-4 rounded-md shadow-md w-full">
      <h2 className="text-xl font-bold mb-2">Todo List</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Go to Gym</li>
        <li>Go to Home</li>
      </ol>
    </div>
  )
}
