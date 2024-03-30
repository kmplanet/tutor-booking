import React from 'react';
import { createRoot } from 'react-dom/client';
import Feed from './Feed';
import FeedItem from './FeedItem';
var url = 'http://image-server-prod.eba-jqccpzay.us-west-2.elasticbeanstalk.com/images';

// App consists of one feed
var App = function App() {
  // const feed = <Feed feedUrl={url} />;
  // return <div style={styles.container}>{feed}</div>;
  return /*#__PURE__*/React.createElement("div", {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Feed, {
    feedUrl: url
  }));
};
var styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
};

// Render an <App> component to the #app div in the body
var root = createRoot(document.getElementById('app'));
root.render( /*#__PURE__*/React.createElement(App, null));