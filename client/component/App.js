import React, { Component } from 'react';

// function MyButton() {
//   return <button>I'm a button</button>;
// }

// export default function App() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       {/* <MyButton /> */}
//     </div>
//   );
// }

const App = () => {
  const list = ['Tutor A', 'Tutor B', 'Tutor C'];
  const listMap = list.map((el, index) => {
    return (
      <h3>
        {el} <button className="button"> Make a booking 📖 </button>
      </h3>
    );
  });
  console.log(listMap);
  return (
    <div>
      <h2>Time slots</h2>
      {listMap}
      <hr></hr>
      <Content2 />
      <InputField />
    </div>
  );
};

const Content2 = () => {
  return (
    <div>
      If you are a tutor and wants to share your available slots, click{'     '}
      <button className="button"> here ! </button>
    </div>
  );
};

const InputField = () => {
  return (
    <div>
      PLACEHOLDER <button className="button"> here ! </button>
    </div>
  );
};

export default App;
