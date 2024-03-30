import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './component/App.js';
var Content = function Content() {
  return /*#__PURE__*/React.createElement("div", null, "'hello'");
};
var root = createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));