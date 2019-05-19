import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import * as Icons from '@material-ui/icons'


const styles = {
  root: {
    width: 230,
  },
};

class TypographyMenu extends React.Component {
    constructor(props){
        super(props)
        this.state={}
      }

    render(){
  const { classes } = this.props;

  return (
      <div className={this.props.openSideBar ? "side-bar":'hidden'}>
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <Icons.Home/>
          </ListItemIcon>
          <Typography variant="inherit">Home</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Icons.Palette />
          </ListItemIcon>
          <Typography variant="inherit">Color</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Icons.Grade/>
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Icons
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
    </div>
  );
    }
}

TypographyMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TypographyMenu);