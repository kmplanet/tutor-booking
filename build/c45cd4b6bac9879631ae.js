import React from 'react';
import { render } from 'react-dom';
import App from './component/App.jsx';
import style from './style.css';
var root = createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));

////https://react.dev/learn/add-react-to-an-existing-project
// import { createRoot } from 'react-dom/client';

// function NavigationBar() {
//   // TODO: Actually implement a navigation bar
//   return <h1>Hello from React!</h1>;
// }

// const domNode = document.getElementById('navigation');
// const root = createRoot(domNode);
// root.render(<NavigationBar />);