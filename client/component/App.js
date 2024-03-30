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
  const list = ['a', 'b', 'c'];
  const listMap = list.map((el, index) => {
    return <h3>{el}</h3>;
  });
  console.log(listMap);
  return (
    <div>
      {listMap}
      <p>this is test element from, App.js</p>
      <Content2 />
      <Content2 />
      <p>hihi</p>
    </div>
  );
};

const Content2 = () => {
  return <div>This is Content 2</div>;
};

export default App;
