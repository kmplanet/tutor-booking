import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './component/App.js';
import './style.css';
var root = createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));