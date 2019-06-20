import React from 'react';
import './DrawerToggleButton.css';
import { toggleMenu } from '../../redux/actions/actions';
import { connect } from 'react-redux';

const drawerToggleButton = props => (
    <button className="toggle-button" onClick={props.toggleMenu}>
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
    </button>
)
const mapStateToProps = state => {
    return {

    }
}
export default connect(mapStateToProps, { toggleMenu })(drawerToggleButton);