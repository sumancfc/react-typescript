import React, { useState } from "react";

interface NewItemFormProps {
  onAdd(text: string): void;
}

const NewItemForm = (props: NewItemFormProps) => {
  const { onAdd } = props;
  const [text, setText] = useState("");

  return (
    <div className='container mx-auto max-w-xs flex flex-col w-full items-start'>
      <input
        type='text'
        className='border h-10 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-full my-4 px-4'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type='submit'
        className='bg-green-500 rounded border-none hover:border-none hover:outline-none shadow-none text-white py-1.5 px-3 text-center'
        onClick={() => onAdd(text)}
      >
        Create
      </button>
    </div>
  );
};

export default NewItemForm;
