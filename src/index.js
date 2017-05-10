import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'React-dom';
import YTSearch from 'youtube-api-search';
//whenever we import or require in, any component that we wrote
//we need to give a the relative path to that component
//vs. importing or requiring in a component from a library (like react above)
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBFUSpk9wq5M799B7U8ZgR_L1oEfTRogXw';

//class is used whenever you want to have the concept of state in component
class App extends Component {
	constructor(props){
		super(props);
		
		this.state = { 
			videos: [],
			selectedVideo: null 
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			//console.log(data);
			//this.setState({ videos: videos });
			//es6 style
			//this.setState({ videos });
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render(){
		//runs only once every 300 milliseconds
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				{/* call backs, great way to do parent child communication */}
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));