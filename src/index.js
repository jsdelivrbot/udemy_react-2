import React, { Component } from 'react';
import ReactDOM from 'React-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBFUSpk9wq5M799B7U8ZgR_L1oEfTRogXw';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
});

class App extends Component {
	render(){
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));