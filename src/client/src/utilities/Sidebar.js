import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


import './Sidebar.css';




const styles = {

   mediumIcon: {
    width: 48,
    height: 48,
  },
   margin: {
    margin: 10,
    height:40,
    width:100
   },
};


const Sidebar = ({onClick}) => (
  <MuiThemeProvider>
    <div >
    <nav id="parentDiv">
    <div id="sidebar">
    <IconButton
      iconStyle={styles.mediumIcon}
      style={styles.large}
    >
      <ActionHome />
    </IconButton>
    <br />
    <RaisedButton label="Splitter" primary={true} style={styles.margin} onClick={() => onClick("SPLITTER")}/>
    <br />
    <RaisedButton label="Finance" primary={true} style={styles.margin} onClick={() => onClick("FINANCE_MANAGER")}/>
    </div>
    </nav>
  </div>
  </MuiThemeProvider>
);

export default Sidebar;
