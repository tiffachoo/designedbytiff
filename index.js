'use strict';

const fs = require('fs');
const path = require('path');

const express = require('express');
const chalk = require('chalk');
const app = express();

const compress = require('compression');
const layouts = require('express-ejs-layouts');

app.set('layout');
app.set('view engine', 'ejs');
app.set('view options', {layout: 'views/layout'});
app.set('views', path.join(process.cwd(), '/views/pages'));

app.use(compress());
// app.use(layouts);
app.use('/client', express.static(path.join(process.cwd(), '/client')));
// app.use('/', express.static(path.join(process.cwd(), '/public')));

app.disable('x-powered-by');

const env = {
  production: process.env.NODE_ENV === 'production'
};

if (env.production) {
  Object.assign(env, {
    assets: JSON.parse(fs.readFileSync(path.join(process.cwd(), 'assets.json')))
  });
}

app.get('/*', (req, res) => {
  res.render('pages/index', {
    env: env
  });
});

const port = Number(process.env.PORT || 3001);
app.listen(port,  () => {
  console.log(chalk.cyan('⚡ DESIGNEDBYTIFF') + chalk.dim.cyan(` ⚓️ :3001`));
});

if (!env.production) {
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');

  const webpackDevConfig = require('./webpack/webpack.dev.config');
  console.log(webpackDevConfig)

  new WebpackDevServer(webpack(webpackDevConfig), {
    publicPath: '/client/',
    contentBase: './client/',
    inline: true,
    hot: true,
    stats: false,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Headers': 'X-Requested-With'
    }
  }).listen(3000, 'localhost',  (err) => {
    if (err) {
      console.log(err);
    }

    console.log(chalk.cyan('                 ') + chalk.dim.cyan('🔥 :3000'));
  });
}
