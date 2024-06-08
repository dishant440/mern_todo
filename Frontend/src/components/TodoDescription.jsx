import React from 'react';

export default function TodoDescription({ description, isVisible }) {
  return (
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isVisible ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="mt-2 p-2 bg-white rounded-md shadow-inner">
        {description}
      </div>
    </div>
  );
}
