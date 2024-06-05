import React from "react";

export default function Button(props) {
  return (
    <button
      type={props.Type}
      className="w-full bg-blue-700 mt-4 text-white py-2 px-4 rounded-md hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      {props.Value}
    </button>
  );
}
