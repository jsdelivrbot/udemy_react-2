import React from 'react';
import ReactDOM from 'React-dom';

const API_KEY = 'AIzaSyBFUSpk9wq5M799B7U8ZgR_L1oEfTRogXw';

//create a new component. This component should produce some html
const App = () => {
	return <div>hi</div>;
}

//take this component's generated html and put it on the page ( in the dom )
ReactDOM.render(<App />, document.querySelector('.container'));