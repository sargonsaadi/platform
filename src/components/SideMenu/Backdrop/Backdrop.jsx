import React from 'react';
import './backdrop.css'
import { connect } from 'react-redux';
import { toggleMenu } from './../../../redux/actions/actions';

const Backdrop = props => (
    <div className="backdrop" onClick={props.toggleMenu} />
)
const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, { toggleMenu })(Backdrop);