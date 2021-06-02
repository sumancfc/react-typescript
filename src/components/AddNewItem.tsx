import React, { useState } from "react";
import NewItemForm from "./NewItemForm";

interface AddNewItemProps {
  dark?: boolean;
  onAdd(text: string): void;
  toggleButtonText: string;
}

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, dark, toggleButtonText } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <div className='max-w-xs mx-auto my-4'>
      <button
        type='submit'
        className={`bg-yellow-300 rounded border-none hover:border-none hover:outline-none cursor-pointer py-2.5 px-3 font-lato font-bold text-base text-center transition-colors duration-75 ease-in w-full hover:bg-indigo-100 ${dark} ? text-black:text-white`}
        //       dark={dark}
        onClick={() => setShowForm(true)}
      >
        {toggleButtonText}
      </button>
    </div>
  );
};
