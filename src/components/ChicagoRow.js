import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';
import numeral from 'numeral';


class ChicagoRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: ''
		}
	}
	componentWillMount() {
		let amountNumber = numeral(this.props.chicagoData.annual_salary).format('$0,0.00');
		this.setState({
			amount: amountNumber
		});
	}
	render() {
		return(
			<Table.Row>
				<Table.Cell>
					<Header as='h3'>{this.props.id}</Header>
				</Table.Cell>
				<Table.Cell>
				<Table.Cell>
					<Header as='h3'>{this.props.chicagoData.department}</Header>
				</Table.Cell>
					<Header as='h6'>{this.props.chicagoData.name}</Header>
				</Table.Cell>
				<Table.Cell>
					<Header as='h6'>{this.state.amount}</Header>
				</Table.Cell>
			</Table.Row>
		)
	}
}

export default ChicagoRow;
