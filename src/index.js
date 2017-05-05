import React, { Component } from 'react';
import ReactDOM from 'React-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBFUSpk9wq5M799B7U8ZgR_L1oEfTRogXw';

class App extends Component {
	constructor(props){
		super(props);
		
		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			//console.log(data);
			//this.setState({ videos: videos });
			//es6 style
			this.setState({ videos });
		});
	}

	render(){
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));