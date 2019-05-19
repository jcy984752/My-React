import React from 'react';
import './style.styl';
import { List } from '../../components';
//import navItems from '../SideBar/data.js'
import ListItemTemplate from '../../components/ListItemTemplate'
import {connect} from 'react-redux'

class Sidebar extends React.Component{
  mapNodetoListItem=(node)=>{
    let subItems = null;
    let key = node.label + '-Toggler';
    if(node['subNavItems']){
      subItems = node['subNavItems'].map(n=>this.mapNodetoListItem(n))
    }
    return (
      <div className="list-item-node" key={key}>
        <ListItemTemplate label={node.label} icon={node.icon} url={node.url} subItems={subItems} toggleFn={this.props.toggleCollapsableItem.bind(this,key)}/>
      </div>
    )
  }

  renderElements=()=>{
    const navElements = this.props.navItems.map(this.mapNodetoListItem);
    return (<List component="nav">
      {navElements}
    </List>)
  }

  render(){
    return(
      <div
        className={this.props.openSideBar ? "side-bar":'side-bar hidden'}
      >
        {this.renderElements()}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    ...state,
    openSideBar: state.sideBarToggler.openSideBar,
    navItems: state.sideBarItems.navItems,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    toggleCollapsableItem: (label)=>{
      dispatch({
        type: "TOGGLE_COLLAPSABLE_ITEM",
        label
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);