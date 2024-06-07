import React from 'react';
import Log from './Log';

export default function NavBar() {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-200 shadow-md">
        <h1 className="flex-grow text-center text-4xl text-blue-500 font-bold">My Todo</h1>
        <div className="flex-shrink-0 mr-4">
            <Log />
        </div>
    </div>
  )
}
