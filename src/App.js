import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

var ListContainer = React.createClass({
  getInitialState: function () {
    return {
      value: '',
      list: [],
    }
  },
  updateValue: function (e) {
    var item = e.target.value;
    this.setState(function (prevState){
      return {
        value: item
      }
    }
  )},
  checkValue: function () {
    return !!this.state.value
  },
  addItem: function () {
    var add = this.state.value
    if(this.checkValue() === true){
      this.setState(function(){
        return {
          value: '',
          list: this.state.list.concat([add])
        }
      })
    }
  },
  removeItem: function (index) {
    this.setState(function(prevState){
      return {
        list: prevState.list.filter(function(val, i){
          return i !== index;
        })
      }
    })
  },
  resetList: function () {
    this.setState(function(){
      return {
        list: []
      }
    })
  },
  render: function () {
    return (
      <div >
        <div className='Title'> To do List </div>
        <input className='inputbox' type='text' onChange={this.updateValue} value={this.state.value}/>
        <button className='addButton'onClick={this.addItem}> Add Item to List</button>
        <div className='items'>
          {this.state.list.map(function(thing, index){
            return (
              <div className='checkbox-default'>
                <input className='checklist' type='checkbox' name='checkbox' id='checkbox1' />
                <label htmlFor='checkbox1' className='thing'> {thing} </label>
                <button onClick={this.removeItem.bind(this, index)} type="button" className="close" >
                  <span >&times;</span>
                </button>
              </div>
            )
          }.bind(this))}
        </div>
          <div>
            <button className="addButton  " onClick={this.resetList}> Delete List </button>
          </div>
      </div>
    )
  }
});


var App = React.createClass({
  render: function () {
    return (
      <div className="App">
        <ListContainer />
      </div>
    )
  }
})

export default App;
