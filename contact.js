import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var nameVar = document.getElementByName('name');
var emailVar = document.getElementByName('email');
var commentVar = document.getElementByName('comment');


fetch('https://formula-test-api.herokuapp.com/contact', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'yourValue',
    email: 'yourOtherValue',
    comment: ''
  })
})