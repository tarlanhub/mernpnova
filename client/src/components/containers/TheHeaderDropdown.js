import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";


import {
  Button,
 
} from "reactstrap";
import CIcon from '@coreui/icons-react'

import { Redirect } from 'react-router-dom'
import { logout } from '../../actions/authActions';
import { buttonReset} from '../../actions/uiActions';


export class TheHeaderDropdown extends Component {

  static propTypes = {
    button: PropTypes.bool,
    authState: PropTypes.object.isRequired,
    buttonReset: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  };


  onLogout = (e) => {
    e.preventDefault();
    this.props.buttonReset();
    this.props.logout();
  };

  render() {

    if(!this.props.authState.isAuthenticated) {
      return <Redirect to="/" />
    }

    const {user} = this.props.authState;

    return (
      
      <div >
      
         
          
           
             
          
         <Button size="lg" onClick={this.onLogout} color="primary">Logout</Button>
           
        
      
       </div>

    
    )
  }
}
const mapStateToProps = (state) => ({ //Maps state to redux store as props
  button: state.ui.button,
  authState: state.auth
});

export default connect(mapStateToProps, { logout, buttonReset })(TheHeaderDropdown);

