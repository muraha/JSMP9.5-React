import React, { Component } from 'react';

import MdSave from 'react-icons/lib/md/save'


export default class Edit extends Component {
  constructor(props) {
    super(props)
  }


  save = (e) => {
		e.preventDefault();
		this.props.onChange(this._newText.value, this.props.index)
		this.setState({
			isEditable: false,
		})
  }
  
  render(){
    return 
      <div contentEditable='true' ref={input => this._newText = input} defaultValue={this.props.value}>
        <button onClick={this.save} id="save"><MdSave /></button>
      </div>
    
  }
}