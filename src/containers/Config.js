import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import User from '../components/User'
import Mood from '../components/Mood'
import Navigation from '../components/Navigation'

import * as moodActions from '../actions/MoodActions'

class Config extends Component {
   render() {
      const { user, mood } = this.props
      const { setMood } = this.props.moodActions

      return (
         <div>
            <Navigation />
            <User user={ user } />
            <Mood mood={ mood } setMood={ setMood } />
         </div>
      )
   }
}

function mapStateToProps(state) {
   return {
      user: state.user,
      mood: state.mood
   }
}

function mapDispatchToProps(dispatch) {
   return {
      moodActions: bindActionCreators(moodActions, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Config)
