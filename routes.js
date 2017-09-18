const express = require('express');
const router = express.Router();
const react = require('react');
const ReactDOMServer = require('react-dom/server')

const component = require('./bundle').default;

router.route('/').get( async (req, res) => {
  const element = react.createElement(component, { foo: 'FOOOOOO' });
  const rendered = ReactDOMServer.renderToString(element);
  res.json({ foo: rendered });
});

module.exports = router;
