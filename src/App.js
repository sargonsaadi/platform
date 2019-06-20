import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { reOrderList } from './redux/actions/actions';
import SideDrawer from './components/SideMenu/SideDrawer/SideDrawer';
import Backdrop from './components/SideMenu/Backdrop/Backdrop';


class App extends Component {
  state = {}

  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount() {

  }
  handleDragEnd = result => {
    console.log("endDrag", result);
    const { source, destination, draggableId } = result;

    if (destination && source.index !== destination.index) {
      this.props.reOrderList(source, destination, draggableId);
    }
  }
  render() {
    return (
      <div>
        <Nav />
        {this.props.isMenuOpen ? (<Backdrop />) : null}
        <SideDrawer />
        <DragDropContext onDragEnd={this.handleDragEnd}>
          <Main />
        </DragDropContext>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isMenuOpen: state.isMenuOpen
  }
}
export default connect(mapStateToProps, { reOrderList })(App);