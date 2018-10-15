import React, { Fragment } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


const myData = [
	{
		name: 'Yury',
		age: 38,
		gender: "Male"
	},
	{
		name: 'Natallia',
		age: 38,
		gender: "Female"
	},
	{
		name: 'Andrei',
		age: 3,
		gender: "Male"
	},
];

const columns = [
	{
		Header: 'Name',
		accessor: 'name'
	},
	{
		Header: 'Age',
		accessor: 'age'
	},
	{
		Header: 'Gender',
		accessor: 'gender'
	},
]

class MainTab extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: myData,
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.quickFilter !== this.props.quickFilter) {
			this.setState({data: myData.filter(el => el.age !== this.props.quickFilter)})
		}
	}



	render() {
		const { quickFilter, changeFilter } = this.props;

		console.log(`Filter: ${this.props.quickFilter}`);
		return (
			<Fragment>
				<button onClick={() => {changeFilter(3)}}>3</button>
				<button onClick={() => {changeFilter(38)}}>38</button>
				<button onClick={() => {changeFilter('')}}>All</button>
				<ReactTable 
					data={this.state.data}
					columns={columns}
					resolveData={data => this.state.data.filter(el => el.age !== this.props.quickFilter)}
				/>
			</Fragment>
			
		);
	}
}

export default MainTab;