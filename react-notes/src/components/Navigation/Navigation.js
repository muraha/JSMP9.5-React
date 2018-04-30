import React, {Component} from 'react';
import C from '../../constants/constants'
import { connect } from "react-redux";
import { setVisibilityFilter } from "../../actions";

import './Navigation.css'

class Navigation extends Component {
  
  
  
  render() {
    return (
      <div className='header'>
        <nav className='nav'> 
          <button className='action-button shadow' onClick={this.props.showAllNotes}>Show all</button>
          <button className='action-button shadow' onClick={this.props.showNewNotes}>New Notes</button>
          <button className='action-button shadow' onClick={this.props.showCompletedNotes}>Completed</button>
          <button className='action-button shadow' onClick={this.props.viewArcihve}>[Archive]</button>
          <input placeholder='Search'></input>
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
});

export default connect(null, mapDispatchToProps)(Navigation);
