import React, { useState } from 'react'

export default function Todo() {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const todoDescription = "This is a description of the specific todo. You need to go to the gym and work out for an hour.";

  return (
    <div className="bg-yellow-200 flex flex-col p-4 mt-4 rounded-md shadow-md w-full">
      <div className="flex justify-between items-center">
        <ol className="list-decimal list-inside space-y-2">
          <li>Go to Home</li>
        </ol>
        <button
          className="ml-2 bg-blue-500 text-white p-1 rounded"
          onClick={handleToggleDescription}
        >
          {showDescription ? 'Hide' : 'Show'} Description
        </button>
      </div>
      <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${showDescription ? 'max-h-40' : 'max-h-0'}`}>
        <div className="mt-2 p-2 bg-white rounded-md shadow-inner">
          {todoDescription}
        </div>
      </div>
    </div>
  )
}
