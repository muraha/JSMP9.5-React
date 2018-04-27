import React, { Component } from 'react';
import MDEdit from 'react-icons/lib/md/edit'
import MdDelete from 'react-icons/lib/md/delete'
import MdSave from 'react-icons/lib/md/save'
import { connect } from 'react-redux'

import './Note.css'

class Note extends Component {
	constructor(props) {
		super(props)
		console.log(props.dispatch)
		this.state = {
			isEditable: false,
			isCompleted: false,
			isArchived: false,
		}
		
		this.edit =this.edit.bind(this)
		this.remove =  this.remove.bind(this)
		this.save = this.save.bind(this)
		this.renderForm = this.renderForm.bind(this)
		this.renderDisplay = this.renderDisplay.bind(this)
	}

	componentDidUpdate = () => {
		var textArea
		if(this.state.isEditable) {
			textArea = this._newText
			textArea.focus()
			textArea.select()
		}
	}

	shouldComponentUpdate = (nextProps, nextState) =>
			this.props.value !== nextProps.value || this.state !== nextState	

	edit = () => {
		this.setState({
			isEditable: true,
		})
	}
  
	remove = () => {
		this.props.onRemove(this.props.index)
	}

	save = (e) => {
		e.preventDefault();
		this.props.onChange(this._newText.value, this.props.index)
		this.setState({
			isEditable: false,
		})
	}

	renderForm = () => 
		<div className="note shadow">
			<div className="note__container ">
				<div className="note__item">
					<textarea wrap autoFocus ref={input => this._newText = input}
									defaultValue={this.props.value}/>
					<button onClick={this.save} id="save"><MdSave /></button>
				</div>
			</div>
		</div>

  
	renderDisplay = () => 
		<div className="note shadow">
			<p>{this.props.value}</p>
			<span>
				<button onClick={this.edit} id="edit"><MDEdit /></button>
				<button onClick={this.remove} id="remove"><MdDelete /></button>
			</span>
		</div>

	render() {
		return this.state.isEditable ? this.renderForm() : this.renderDisplay()
	}
}

export default connect()(Note)
