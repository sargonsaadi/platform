import React, { Component } from 'react';
import cancel from '../../icons/cancel.svg'
import pin from '../../icons/pin.png';
import drag from '../../icons/drag.png';
import minimize from '../../icons/minimize.png';
import { cancelApp, collapseApp, pinApp } from '../../redux/actions/actions';
import { connect } from 'react-redux';


class SingleAppNav extends Component {
    state = {

    }
    render() {
        const { appId, apps, cancelApp, collapseApp, pinApp, testApp, isDragging, ...dragHandleProps } = this.props;
        const app = apps[appId];
        console.log("isDragging", isDragging)
        return (
            <div className="single-app-nav">
                <div className={isDragging ? "wrapper dragging" : "wrapper"}>
                    <div className="flex ">
                        <img src={cancel} alt="cancel" height="30px" onClick={() => cancelApp(appId)} />
                    </div>
                    <div className="flex">{apps[appId].title}</div>
                    <div className="flex" >
                        <img src={minimize} alt="minimize" height="30px" className={app.collapsed ? 'collapsed' : ''} onClick={() => collapseApp(appId)} />
                        <img src={pin} alt="pin" height="30px" className={app.pinned ? 'rotate' : ''} onClick={() => pinApp(appId)} />
                        <img src={drag} alt="drag" height="30px" className={app.pinned ? 'drag pinned' : 'drag '} {...dragHandleProps} />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        apps: state.apps
    }
}
export default connect(mapStateToProps, { collapseApp, cancelApp, pinApp })(SingleAppNav);