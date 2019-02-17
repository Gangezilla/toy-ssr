const ReactDOMServer = require('react-dom/server');

const render = (markup) => (
  ReactDOMServer.renderToString(`<div id="root">${markup}</div>`)
);

module.exports = { render }