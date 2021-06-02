import React from "react";
import { AddNewItem } from "./AddNewItem";

interface ColumnProps {
  text: String;
}

const Column = ({ text, children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <div className='bg-gray-200 w-80 m-5 p-2 flex-grow'>
      <h1 className='p-3 text-xl font-bold font-serif tracking-wider text-center'>
        {text}
      </h1>
      {children}

      <AddNewItem
        toggleButtonText='Add Another Task'
        onAdd={console.log}
        dark
      />
    </div>
  );
};

export default Column;
