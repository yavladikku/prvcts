import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const url = 'https://formula-test-api.herokuapp.com/menu';

// ReactDOM.render(<App />, document.getElementById('hotdog3'));

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

const items = httpGet(url);

const array = JSON.parse(items);
// alert(array);

// ReactDOM.render(items, document.getElementById('hotdog3'));

function filterByExpiration (items) {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  if(dd<10) {
      dd = '0'+dd
  } 
  if(mm<10) {
      mm = '0'+mm
  } 
  today = mm + '-' + dd + '-' + yyyy;

  for(var i = 0; i<items.length; i++){
    if(Date.parse(items[i].expirationDate) < Date.parse(today)){
      items.splice(i,1);
      i--;
    }
  }
  return items;
}

filterByExpiration(array);

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}



const xxx = httpGet(url);



class App2 extends Component {
  render() {
    return (
      // <img src={array[1].backgroundURL}></img>
      <div style={{ backgroundImage: `url(${array[1].backgroundURL})` }} />
    );
  }
}




export default App2;