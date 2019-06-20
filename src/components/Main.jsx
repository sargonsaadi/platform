import React, { Component } from 'react';
import Separator from './Utilities/Separator';
import SingleAppNav from './SingleApp/SingleAppNav';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';



class Main extends Component {
    state = {
        appModules: [],
        appList: []
    }


    componentDidMount = () => {

        this.calculateModules();
    }
    componentDidUpdate = (prevProps, prevState) => {

        if (this.props.appList !== prevState.appList) {
            this.calculateModules();
        }
    }

    calculateModules = () => {
        const { appList } = this.props;
        const appModules = [];
        appList.map((appId, i) => {
            appModules.push({
                loadedModule: Loadable({
                    loader: () => import(`./apps/${appId}/${appId}`),
                    loading: () => <div>Loading {appId}...</div>
                }),
                appId
            });
        })

        this.setState({
            appModules,
            appList
        })
    }

    render() {

        const { appModules } = this.state;
        return (
            <div className="main">

                <Droppable droppableId={'platform'}>
                    {provided => (
                        <div className="wrapper"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {appModules.map((module, i) => {
                                let Module = appModules[i].loadedModule
                                let appId = appModules[i].appId;
                                return (
                                    <>
                                        <Draggable key={appId} draggableId={appId} index={i} isDragDisabled={this.props.apps[appId].pinned}>
                                            {(dragProvided, snapshot) => (
                                                <div
                                                    {...dragProvided.draggableProps}
                                                    ref={dragProvided.innerRef}
                                                    className="single-app"
                                                >
                                                    <SingleAppNav appId={appId} isDragging={snapshot.isDragging} {...dragProvided.dragHandleProps} />
                                                    <Module />
                                                </div>
                                            )}
                                        </Draggable>

                                        <Separator key={appId + 1} />
                                    </>
                                )
                            })}
                            {provided.placeholder}
                        </div>

                    )}
                </Droppable>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        apps: state.apps,
        appList: state.appList,
        appModules: state.appModules
    }
}

export default connect(mapStateToProps, {})(Main);