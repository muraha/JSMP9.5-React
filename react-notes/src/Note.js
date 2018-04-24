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

	componentDidUpdate = () => {
		var textArea
		if(this.state.editing) {
			textArea = this._newText
			textArea.focus()
			textArea.select()
		}
	}

	shouldComponentUpdate = (nextProps, nextState) =>
			this.props.value !== nextProps.value || this.state !== nextState	

	edit = () => {
		this.setState({
			editing: true,
		})
	}
  
	remove = () => {
		this.props.onRemove(this.props.index)
	}

	save = (e) => {
		e.preventDefault();
		this.props.onChange(this._newText.value, this.props.index)
		this.setState({
			editing: false,
		})
	}

	renderForm = () => 
		<div className="note">
			<form onSubmit={this.save}>
				<textarea wrap autoFocus ref={input => this._newText = input}
									defaultValue={this.props.value}/>
				<button id="save"><MdSave /></button>
			</form>
		</div>

  
	renderDisplay = () => 
		<div className="note">
			<p>{this.props.value}</p>
			<span>
				<button onClick={this.edit} id="edit"><MDEdit /></button>
				<button onClick={this.remove} id="remove"><MdDelete /></button>
			</span>
		</div>

	render() {
		return this.state.editing ? this.renderForm() : this.renderDisplay()
	}
}
