import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import App2 from './App2';
import App3 from './App3';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

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

// alert(array);

ReactDOM.render(array[0].name, document.getElementById('bigText1'));
ReactDOM.render(array[0].description, document.getElementById('smallText1'));
ReactDOM.render(<App />, document.getElementById('img1'));


ReactDOM.render(array[1].name, document.getElementById('bigText2'));
ReactDOM.render(array[1].description, document.getElementById('smallText2'));
ReactDOM.render(<App2 />, document.getElementById('img2'));

// ReactDOM.render(array[2].name, document.getElementById('bigText3'));
// ReactDOM.render(array[2].description, document.getElementById('smallText3'));
// ReactDOM.render(<App3 />, document.getElementById('img3'));




