import React from "react";

function Input(props) {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block text-sm text-black font-bold mb-4 mt-2">{props.name}</label>
      <input
        className="mt-1 block w-full px-3 py-2 border border-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        type="text"
      />
    </div>
  );
}

export default Input;
