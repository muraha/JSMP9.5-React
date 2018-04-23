import React, { Component } from 'react';
import MDEdit from 'react-icons/lib/md/edit'
import MdDelete from 'react-icons/lib/md/delete'
import MdSave from 'react-icons/lib/md/save'


export default class Note extends Component {
	constructor(props) {
		super(props)
		this.state = {
			editing: false,
		}
		this.edit =this.edit.bind(this)
		this.remove =  this.remove.bind(this)
		this.save = this.save.bind(this)
		this.renderForm = this.renderForm.bind(this)
		this.renderDisplay = this.renderDisplay.bind(this)
	}

	edit = () => {
		this.setState({
			editing: true,
		})
	}
  
	remove = () => {
		alert('removing note')
	}

	save = () => {
		alert(this._newText.value)
	}

	renderForm = () => {
		return (
			<div className="note">
				<form>
					<textarea ref={input => this._newText = input}/>
					<button onClick={this.save}><MdSave /></button>
				</form>
			</div>
		)
	}
  
	renderDisplay = () => {
		return (
			<div className="note">
				<p>{this.props.value}</p>
				<span>
					<button onClick={this.edit} id="edit"><MDEdit /></button>
					<button onClick={this.remove} id="remove"><MdDelete /></button>
				</span>
			</div>
		)
	}

	render() {
		return this.state.editing ? this.renderForm() : this.renderDisplay()
	}
}
