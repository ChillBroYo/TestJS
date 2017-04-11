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
//Test if second h1 has the name Users
describe('index.html', () => {
  it('Should say Users', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[1];
      expect(h1.innerHTML).to.equal("Users");
      done();
      window.close();
    });
  })
})

//Test if the first h1 has value This is the heading, or is it, or is it really
describe('index.html', () => {
  it('Should have 0 rows to start', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window){
    const h1 = window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal('This is the heading, or is it, or is it really');
    done();
    window.close;
    });
  })
})

//Test if the first table has the name outlineTable
describe('index.html', () => {
  it('Should have 0 rows to start', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window){
    const table = window.document.getElementsByTagName('table')[0];
    expect(table.id).to.equal('outlineTable');
    done();
    window.close;
    });
  })

})
