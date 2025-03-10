import React from 'react';
import Select from './components/Select/Select';
import Title from './components/Title/Title';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center  bg-gradient-to-br from-blue-300 to-pink-400 p-4">
      <Title />
      <Select />
    </div>
  );
};

export default App;
