 
import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class Dateing extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2020-01-01"}
  }
 
  render(){
    return (
      <DatePicker
        style={{width: 250, marginTop:105, marginLeft:75}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 50
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}