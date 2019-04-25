// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import App from './App';

function sum(a:number, b:number):number {
  return a + b;
}

it('test func',() => {
  expect(sum(1, 2)).toBe(3);
});
