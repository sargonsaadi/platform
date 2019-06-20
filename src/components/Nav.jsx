import React from 'react';
import DrawerToggleButton from './MenuIcon/DrawerToggleButton';
import { toggleMenu } from '../redux/actions/actions';
import { connect } from 'react-redux';

const Nav = props => {
    return (
        <div className="nav">
            <div className="wrapper">
                <div className="flex" ><DrawerToggleButton /></div>
                <div className="flex title">PLATFORM</div>
                <div className="flex"></div>
            </div>

        </div>
    );
}
const mapStateToProps = state => {
    return {

    }
}
export default connect(mapStateToProps, { toggleMenu })(Nav)