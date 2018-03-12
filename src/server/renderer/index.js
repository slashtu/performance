import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter as Router} from 'react-router-dom';
import Loadable from 'react-loadable';
import {getBundles} from 'react-loadable/webpack';

import Routes from '../../routes';

const stats = require('../../../dist/react-loadable.json');

const renderer = () => (req, res) => {
  const modules = [];
  const context = {};

  const html = ReactDOMServer.renderToString( // eslint-disable-line function-paren-newline
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <Router location={req.url} context={context}>
        <div>
          <Routes />
        </div>
      </Router>
    </Loadable.Capture>);

  console.log(modules);
  const bundles = getBundles(stats, modules);

  console.log(bundles);

  const styles = bundles.filter(bundle => bundle.file.endsWith('.css'));
  const scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));

  res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My App</title>
        ${styles.map(style => `<link href="/dist/${style.file}" rel="stylesheet"/>`).join('\n')}
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="/dist/main.js"></script>
        ${scripts.map(script => `<script src="/dist/${script.file}"></script>`).join('\n')}
        <script>window.main();</script>
      </body>
    </html>
  `);
};

export default renderer;
