import React, { Component} from 'react';

class Home extends Component {
	render() {
		return (
			<div className="homeContent">
				<h4>LOCATION & HOURS</h4>
				<ul>
					<li>1067 N San Antonio Rd Los Altos, CA 94022 </li>
					<li>Phone: (650) 948-2696 </li>
					<li>Fax: (650) 948-0121 </li>
					<li>Sunday – Thursday – 11:30am – 9:30pm </li>
					<li>Friday 11:30am – 10pm </li>
					<li>Saturday 12pm (noon) – 10pm </li>
				</ul>
			</div>
		)
	}

}

export default Home;