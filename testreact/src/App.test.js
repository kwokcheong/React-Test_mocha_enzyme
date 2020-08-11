import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ReactDOM from "react-dom";
import { act } from 'react-dom/test-utils';
import { expect } from "chai";
var jsdom = require("mocha-jsdom");

let rootContainer;

//Before each and after Each are test hooks that run before and after every test case in a script
beforeEach(()=>{
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(()=>{
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("App Component Testing", ()=>{
  it("Renders Hello World Title", ()=>{
    act(()=>{
      ReactDOM.render(<App/>, rootContainer)
    });
    //Assert that h1 contains Hello World
    const h1 = rootContainer.querySelector("h1");
    expect(h1.textContent).to.equal("Hello World");

  });
});
