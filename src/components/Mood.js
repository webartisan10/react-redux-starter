import React, { PropTypes, Component } from 'react'

export default class Mood extends Component {
   onYearBtnClick(e) {
      this.props.setMood(e.target.innerText)
   }
   render() {
      const { mood } = this.props
      return (
         <div>
            <p> Your current mood :  { mood.mood } </p>
            <p> Today: { mood.date } </p>
            <div>
               <p> Do you wanna change your mood? </p>
               <button onClick={::this.onYearBtnClick}> Perfect </button>
               <button onClick={::this.onYearBtnClick}> Normal </button>
               <button onClick={::this.onYearBtnClick}> Sad </button>
            </div>
         </div>
      )
   }
}

Mood.propTypes = {
   mood: PropTypes.object.isRequired,
   setMood: PropTypes.func.isRequired
}
