import React, { Component } from 'react';
import MDEdit from 'react-icons/lib/md/edit'
import MdDelete from 'react-icons/lib/md/delete'



export default class Note extends Component {
	constructor(props) {
		super(props)
		this.edit = this.edit.bind(this)
		this.remove = this.remove.bind(this)
	}
	edit = () => {
		
	}
  
	remove = () => {
		
	}
  
  render() {
		return (
			<div className="note">
				<p>Learn React</p>
				<span>
					<button onClick={this.edit} id="edit"><MDEdit /></button>
					<button onClick={this.remove} id="remove"><MdDelete /></button>
				</span>
			</div>
		)
	}
}
