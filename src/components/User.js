import React, { PropTypes, Component } from 'react'

export default class User extends Component {
  render() {
    const { user } = this.props
    return (
		<div>
			<p>Hello, {user.first_name} {user.last_name}!</p>
			<hr />
		</div>
	)
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired
}
