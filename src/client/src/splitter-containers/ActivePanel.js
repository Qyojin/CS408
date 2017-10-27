import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import EventMemberPanel from '../event/EventMemberPanel';
import BalancePanel from '../balance-panel/BalancePanel';
import MessageBox from '../message-box/MessageBox';
import CreateEventPanel from '../event/CreateEventPanel';
import {MESSAGE_BOX, BALANCE,CREATE_BOX} from '../constants/Names';

const muiTheme = getMuiTheme({
    fontFamily: 'Alegreya Sans SC'
});

const ActivePanel = (props)=> {
  const activePanel = props.activePanel
  switch(activePanel) {
    case MESSAGE_BOX:
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <MessageBox />
        </MuiThemeProvider>
      );
    case  BALANCE:
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <BalancePanel />
        </MuiThemeProvider>
      );


    case  CREATE_BOX:
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <CreateEventPanel />
        </MuiThemeProvider>
      );


    default:
      return null
  }
}

export default ActivePanel