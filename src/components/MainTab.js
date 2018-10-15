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

function change(myData) {
	return myData.filter(el => el.age !== 3);
}

console.log(change(myData))


class MainTab extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: myData,
			quickFilter: '',
		}
	}
	render() {
		console.log(`Filter: ${this.state.quickFilter}`);
		return (
			<Fragment>
				<button onClick={() => {this.setState({data: myData.filter(el => el.age !== 3)})}}>3</button>
				<button onClick={() => {this.setState({data: myData.filter(el => el.age !== 38)})}}>38</button>
				<button onClick={() => {this.setState({data: myData.filter(el => el.age !== '')})}}>All</button>
				<ReactTable 
					data={this.state.data}
					columns={columns}
					resolveData={data => this.state.data.filter(el => el.age !== this.state.quickFilter)}
				/>
			</Fragment>
			
		);
	}
}

export default MainTab;