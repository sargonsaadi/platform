import React from 'react';
import './SideDrawer.css';
import { toggleMenu } from '../../../redux/actions/actions';
import { connect } from 'react-redux';
import back from '../../../icons/back.png';
import MiniApp from '../../miniApps/MiniApp';
import { reOrderSideList } from '../../../redux/actions/actions';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const SideDrawer = props => {
    const sideDrawerPosition = props.isMenuOpen ? 'side-drawer open' : 'side-drawer';

    function onDragEnd(result) {
        console.log("endDrag", result);
        const { source, destination, draggableId } = result;

        if (destination && source.index !== destination.index) {
            props.reOrderSideList(source, destination, draggableId);
        }
    }
    return (
        <>
            <div className={sideDrawerPosition}>
                <div className="side-drawer-header">
                    <div className="back"><img src={back} alt="back" height="40px" onClick={props.toggleMenu} /></div>
                </div>

                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId='side-drawer' direction='vertical'>
                        {provided => (
                            <div className="side-drawer-body"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >

                                {props.sideAppList.map((appId, index) => (
                                    <MiniApp key={appId} appId={appId} index={index} />
                                ))}
                                {provided.placeholder}


                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>

        </ >

    )
}
const maypStateToProps = state => {
    return {
        isMenuOpen: state.isMenuOpen,
        apps: state.apps,
        sideAppList: state.sideAppList
    }
}
export default connect(maypStateToProps, { toggleMenu, reOrderSideList })(SideDrawer) 