import React from "react";
import Card from "./components/Card";
import Column from "./components/Column";

const App: React.FC = () => {
  return (
    <div className='flex flex-row w-full h-full p-5 items-start bg-blue-400'>
      <Column text='To Do'>
        <Card text='Generate app Scaffold' />
      </Column>
      <Column text='In Progress'>
        <Card text='Learn React and TypeScript' />
      </Column>
      <Column text='Done'>
        <Card text='Begin to use static typing' />
      </Column>
    </div>
  );
};

export default App;
