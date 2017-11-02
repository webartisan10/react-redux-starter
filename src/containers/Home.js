import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navigation from '../components/Navigation'
import User from '../components/User'

class Home extends Component {
	render() {
		const { user } = this.props
		return (
			<div>
				<Navigation />
				<User user={user} />
				<div> 
					<p>This is just a home page ..</p>
					<p>
						This project is based on <b> React + Redux; </b> <br />
						It has configured Routes that already work with Redux Store. So, you don't need to spend your time on it. <br />
						Moreover, we it has hot module replacement plagin and optimized webpack configs that allow you just to start build your project on React + Redux.
					</p>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Home)
