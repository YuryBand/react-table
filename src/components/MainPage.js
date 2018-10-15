import React, { Fragment } from 'react';
import MainTab from './MainTab.js';
import OtherPage from './OtherPage.js';

export default class MainPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			quickFilter: '',
			isShown: true
		}
		this.changeFilter = this.changeFilter.bind(this);
	}


	changeFilter(value) {
		this.setState({quickFilter: value})
	}

	render() {
		const { isShown, quickFilter } = this.state;
		return (
			<Fragment>
				<button onClick={() => this.setState({isShown: !this.state.isShown})}>Show/Hide</button>
				{isShown && <MainTab changeFilter={this.changeFilter} quickFilter={quickFilter}/>}
				{!isShown && <OtherPage/>}
			</Fragment>

		)
	}
}