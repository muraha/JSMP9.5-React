import React, {Component} from 'react';
import C from '../../constants/constants'
import { connect } from "react-redux";
import { setVisibilityFilter, search } from "../../actions";

import './Navigation.css'

class Navigation extends Component {
  
  search = (value) => {
    value = this.inputValue.value;
    this.props.search(value)
    this.props.searchResults()
    }
  
  render() {
    return (
      <div className='header'>
        <nav className='nav'> 
          <button className='action-button shadow' onClick={this.props.showAllNotes}>Show all</button>
          <button className='action-button shadow' onClick={this.props.showNewNotes}>New Notes</button>
          <button className='action-button shadow' onClick={this.props.showCompletedNotes}>Completed</button>
          <button className='action-button shadow' onClick={this.props.viewArcihve}>[Archive]</button>
          <input placeholder='Search' onChange={this.search} ref={input => this.inputValue = input}></input>
        </nav>
      </div>  
    )
  }
}



const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  showAllNotes: () => dispatch(setVisibilityFilter(C.SHOW_ALL)),
  showNewNotes: () => dispatch(setVisibilityFilter(C.SHOW_NEW)),
  showCompletedNotes: () => dispatch(setVisibilityFilter(C.SHOW_COMPLETED)),
  viewArcihve: () => dispatch(setVisibilityFilter(C.SHOW_ARCHIVE)),
  search: (...args) => dispatch(search(...args)),
  searchResults: () => dispatch(setVisibilityFilter(C.SHOW_SEARCH_RESULT)),
});

export default connect(null, mapDispatchToProps)(Navigation);
