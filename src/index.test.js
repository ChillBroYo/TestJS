//first used when it doesnt have an import
import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});


//Asynchronous calls require the 'done' parameter in the mocha framework, in order to evaluate multiple tests
describe('index.html', () => {
  it('Should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("This is the heading, or is it, or is it really");
      done();
      window.close();
    });
  })
})
