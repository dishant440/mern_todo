import React, { useState } from 'react';
import { TodoDescription, Button } from '../index';

export default function Todo() {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const todoDescription = "This is a description of the specific todo. You need to go to the gym and work out for an hour.";

  return (
    <div className="bg-yellow-200 flex flex-col p-4 mt-4 rounded-md shadow-md w-full">
      <div className="flex justify-between items-center mt-2">
        <div className="flex-1">
          <ol className="list-decimal list-inside space-y-2">
            <li className="whitespace-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cumque rem omnis sequi commodi at dicta assumenda facilis quidem aliquid. </li>
          </ol>
        </div>
        <div className="flex items-center ml-4">
          <Button
            onClick={handleToggleDescription}
            value={showDescription ? 'Hide Description' : 'Show Description'}
            classname="mx-2"
          />
          <Button Type="submit" value="X" classname="w-[50px]" />
        </div>
      </div>
      <TodoDescription description={todoDescription} isVisible={showDescription} />
    </div>
  );
}
