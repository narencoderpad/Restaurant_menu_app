import React, { Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CategoryItems from './categoryItems.js';
import '../App.css';

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			catItems: [],
			selCat: [],
			show: false,
			loading: true,
			pageloading: true,
			addClass:""
		}
	}

	async componentDidMount() {
		try{
			setTimeout(() => {
				this.setState({ loading: false, pageloading: false });
			  }, 4000);
			await axios.get('https://stream-restaurant-menu-svc.herokuapp.com/category')
				.then(response => {
					this.setState({
						categories: response.data
					})
				})
				//.catch(error => console.log(error))
		}catch(error){
			console.log(error);
		}
	}

	getCatItems = async (category,id) => {
		try{
			this.setState({ pageloading: true, addClass: id });
			setTimeout(() => {
				this.setState({ pageloading: false });
			  }, 2000);
			await axios.get(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${category.short_name}`)
			  .then(response => {
				  this.setState({
					  catItems: response.data,
					  selCat: category,
					  //show: true
				  })
			  })
			//.catch(error => console.log(error));
		} catch(error){
			console.log(error);
		}		
	}

	render() {
		return (
			<div>
				{this.state.loading ? (<div className="pad20">...Loading...</div>):<div>
				<div className="catList">
					<h4>Menu Categories</h4>

					{this.state.categories.map((category) => (
						<li className={
							this.state.addClass === category.id
								? "Active list-style"
								: "Normal list-style"
						} key={category.id} >
							<Link to={`#/items/${category.short_name}`} onClick={() => this.getCatItems(category,category.id)}>
								{category.name} - ({category.short_name})
							</Link>
						</li>
					))}
				</div>
				<CategoryItems pageloading = {this.state.pageloading} catItems= {this.state.catItems} selCat={this.state.selCat}></CategoryItems>
			</div>}
			</div>
		)
	}

}

export default Categories;
