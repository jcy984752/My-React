import React from 'react';
//import logo from "../../assets/images/lebron.jpg";
import { Menu, MenuItem } from '../';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux"


class Link extends React.Component {    

    render() {
        const { anchorEl, handleClick, handleClose, items } = this.props;
        const MenuItems = items.map(i=>{
            return (<MenuItem onClick={handleClose} key={i.name+"RightMenu"}>
                <a href={i.link}>{i.name}</a>
            </MenuItem>)
        })
      return (
            <div>
                    <Button 
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true" 
                        onClick={handleClick}
                    >
                    Link
                    </Button>
                    <Menu 
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {MenuItems}
                    </Menu>
            </div>
      )
    }
}
const stateToProps = (state) =>{
    return{
        ...state,
        anchorEl: state.RightMenu.anchorEl,
        items: state.RightMenu.items
    }
}

const dispatchToProps = (dispatch) =>{
    return {
        handleClick: (event) =>{
            dispatch({
                type:"Open_Menu",
                anchorEl: event.currentTarget
            })
        },
        handleClose: () =>{
            dispatch({
                type:"Close_Menu"
            })
        }
    }
}
export default connect(stateToProps, dispatchToProps)(Link);