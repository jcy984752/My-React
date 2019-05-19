import React from 'react';
//import logo from "../../assets/images/lebron.jpg";
import { AppBar, Toolbar, Icons } from '../../components';
import Button from '@material-ui/core/Button';
import Link from '../../components/Link';
import {connect} from 'react-redux';


class Header extends React.Component {
    render() {
        return(
        <div className='top'>
          <AppBar color='default' className='top'>
            <Toolbar className='toolbar'>
                <div className='left'>
                    <Button onClick={()=>{this.props.toggleSidebar()}}>
                        <Icons.Menu/>
                    </Button>
                </div>
                hello
                <div className='right'>
                    <Link/>
                </div>
                
            </Toolbar>
          </AppBar>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
      toggleSidebar: ()=> {dispatch({
          type:"TOGGLE_SIDEBAR"
        })
      }
    }
  }

export default connect(null, mapDispatchToProps)(Header);
