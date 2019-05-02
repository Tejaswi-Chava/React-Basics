import path from 'path';
import express from 'express';
import webdriver from 'selenium-webdriver';
require('chromedriver');

const {By, Until} = webdriver;

describe('todo app',()=>{
    let driver;
    let server;
    // this.timeout(60000)
    
  before((done) => {
    const app = express()
    app.use('/', express.static(path.resolve(__dirname, '../../dist')))
    server = app.listen(8080, done)
  })
  after(() => {
    server.close()
  })
})