import React, { Component } from 'react';

class SearchYear extends Component {
	constructor(props) {
		super(props);
		this.state = {
			year: ''
		}
	}
	onSubmitYear(year) {
		this.setState({year});
		this.props.onSearchYearChange(year);
	}
	render() {
		return (
			<div className='search-bar'>
				<input
					value={this.state.year}
					onChange={event => this.onSubmitYear(event.target.value)}
				/>
			</div>
		)
	}
}

export default SearchYear;