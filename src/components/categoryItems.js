import React, { Component} from 'react';

class CategoryItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:true
		}
	}
	 componentWillReceiveProps(nextProps){
         if(nextProps.catItems && nextProps.selCat){
			setTimeout(() => {
	 			this.setState({ loading: false });
	 		  }, 2000);
	 	}
	 }
	render() {
console.log(this.props.pageloading)
		const catName = this.props ? this.props.selCat.short_name : '';
		const catItems = this.props ? this.props.catItems : '';
		return (
			<div>{this.props.pageloading ? (<div>...Loading...</div>):
			""}
			{catName && catItems && !this.props.pageloading ? (
				<div>
				<h4>Items in Category: ({catName})</h4>
				<table className="itemsTable">
					<thead>
						<tr>
							<th>Item</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						{catItems && catItems.length > 0 ? 
							catItems.map(function(item,i){
								return (
									<tr>
										<td>{item.name}</td>
										<td>{item.description}</td>
									</tr>
								)
							})
							: null}
					</tbody>
				</table>
			</div>
			):""}
			</div>
		)
	}

}

export default CategoryItems;
