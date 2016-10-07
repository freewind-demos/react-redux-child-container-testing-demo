'use strict';
import Item from '../components/item.jsx';
import {connect} from 'react-redux';
import * as actions from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    onDeleteFruit: (name) => dispatch(actions.deleteFruit(name))
  }
}

export default connect(state=>state, mapDispatchToProps)(Item);
