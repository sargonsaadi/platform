import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { toggleActive } from '../../redux/actions/actions';



class MiniApp extends Component {
    state = {}
    render() {
        const { apps, appId, index, toggleActive } = this.props;
        const app = apps[appId]
        return (
            <Draggable
                draggableId={appId}
                index={index}
            >
                {(provided, snapshot) => (
                    <div className="mini-app"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}

                        onClick={() => toggleActive(appId)}
                    >
                        <div className={snapshot.isDragging ? 'mini-dragging' : ""}>

                            <div className={app.active ? "wrapper active" : "wrapper"}>
                                <div className={snapshot.isDragging ? "" : ""}>
                                    <p>{appId}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
        );
    }
}
const mapStateToProps = state => {
    return {
        apps: state.apps
    }
}
export default connect(mapStateToProps, { toggleActive })(MiniApp);