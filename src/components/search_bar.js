import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
		//whenever the state is changed the component immediately re-renders
		// this is component level state this is 'this state' it soley belongs to search bar
		//whenever we change the state here it's localized.
		this.state = { term: '' };
	}

	render(){
		return (
			<div className="search-bar">
				<input onChange={event => this.onInputChange(event.target.value)} />
			</div>
		)
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;