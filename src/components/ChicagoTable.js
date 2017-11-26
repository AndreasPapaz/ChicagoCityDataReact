import React, { Component } from 'react';
import { Container, Header, Table } from 'semantic-ui-react';
import axios from 'axios';
import ChicagoRow from './ChicagoRow';


// const runQuery = 'https://data.cityofchicago.org/resource/rjgc-4h37.json?$order=amount DESC&$limit=10&check_date=';
const runQuery = 'https://data.cityofchicago.org/resource/tt4n-kn4t.json?$where=annual_salary > 0 &$limit=10&$order=annual_salary DESC';


class ChicagoTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		};
		this.searchChicago = this.searchChicago.bind(this);
	}
	searchChicago() {
		// axios.get(runQuery + year, ).then(data => {

		// 	const uploadedChicago = data.data;

		// 	let updatedData = Object.assign([], this.state.list);
		// 		updatedData.push(uploadedChicago);

		// 	this.setState({
		// 		list: uploadedChicago,
		// 		year: year
		// 	});
		// });
		axios.get(runQuery).then(data => {
			console.log(data.data);
			const uploadedChicago = data.data;

			let updatedData = Object.assign([], this.state.list);
				updatedData.push(uploadedChicago);

			this.setState({ list: uploadedChicago });
		});
	}

	componentDidMount() {
		this.searchChicago();
	}

	render() {
		return (
			<Container text>
				<Header as='h2'> Highest Salaires in Chicago </Header>
				<Table celled fixed singleLine>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell>#Number</Table.HeaderCell>
				        <Table.HeaderCell>Department</Table.HeaderCell>
				        <Table.HeaderCell>Name</Table.HeaderCell>
				        <Table.HeaderCell>Salary</Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				    	{this.state.list.map(function(entry, i) {
				    		return (
				    			<ChicagoRow key={i} id={ i + 1 } chicagoData={entry} />
				    		);
				    	})}
				    </Table.Body>
				</Table>
			</Container>
		)
	}
};

export default ChicagoTable;