import React, { Component } from 'react';

import MdDelete from 'react-icons/lib/md/delete'
import MdSave from 'react-icons/lib/md/save'
import MDArchive from 'react-icons/lib/md/archive'
import MDUnArchive from 'react-icons/lib/md/unarchive'
import MDComplete from 'react-icons/lib/md/check-box'

import './Note.css'

export default class Note extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isEditable: false,
		}
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
  /** @TODO: change, cuz currently it is not working */ 
  this.props !== nextProps || this.state !== nextState    

	edit = () => {
		this.setState({
			isEditable: true,
    })
  }
   
  save = (e) => {
    e.preventDefault();
    this._newText.value.trim().length === 0 ? 
      this.props.onRemove(this.props.index) : 
      this.props.onChange(this.props.index, this._newText.value)
		this.setState({
			isEditable: false,
		})
	}

	remove = () => {
		this.props.onRemove(this.props.index)
  }
   
  markComplete = () => {
		this.props.onSetComplete(this.props.index)
  }
  
  toArchive = () => {
		this.props.onMoveToArchive(this.props.index)
  }

	renderForm = () => 
		<div className="note shadow">
			<div className="note__container ">
					<textarea wrap='true' autoFocus ref={input => this._newText = input} defaultValue={this.props.text}/>
					<button onClick={this.save} id="save"><MdSave /></button>
			</div>
		</div>

  renderDisplay = () => {
    const {isCompleted, isArchived} = this.props
    return (   
    <div className =
      {isCompleted && isArchived ? 
      'note shadow note__completed note__archived' : 
      isCompleted && !isArchived ?
      'note shadow note__completed' :
      !isCompleted && isArchived ?
      'note shadow note__archived' :
      "note shadow"}>

      <p onDoubleClick={this.edit}> {this.props.text} </p>
			<span>
        <button onClick={this.markComplete} id="complete"><MDComplete /></button>
        <button onClick={this.toArchive} id="archive">
        {!isArchived ?
        <MDArchive /> :
        <MDUnArchive /> }</button>
				<button onClick={this.remove} id="remove"><MdDelete /></button>
			</span>
		</div>)
  }
	render() {
		return this.state.isEditable ? this.renderForm() : this.renderDisplay()
	}
}


