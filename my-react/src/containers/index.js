import React from 'react';
import { NotFoundPage, ColorsPage, HomePage, IconPage, ChartsPages, ComponentsPages, Footer } from '../components/';
import Header from './Header'
import { HashRouter, Route, Switch } from 'react-router-dom'
import SideBar from './SideBar'
import { connect } from 'react-redux'


class App extends React.Component {

  render(){
    return (
      <HashRouter>
      <div className='App'>
        <Header/>
        {/*<AppMenu openSideBar={this.state.openSideBar}/>*/}
        <SideBar/>
        <div className={this.props.openSideBar? 'margin-left main':'main'}>
          <div className="content">
            <Switch>
            <Route exact path='/' component={HomePage}/>
              <Route path='/colors' component={ColorsPage}/>
              <Route path='/icons' component={IconPage}/>
              <Route path='/components/button' component={ComponentsPages.ButtonPage}/>
              <Route path='/components/table' component={ComponentsPages.TablePage}/>
              <Route path='/components/treeTable' component={ComponentsPages.TreeTablePage}/>
              <Route path='/components/tabs' component={ComponentsPages.TabsPage}/>
              <Route path='/components/spinner' component={ComponentsPages.SpinnerPage}/>
              <Route path='/components/progress' component={ComponentsPages.ProgressPage}/>
              <Route path='/components/messageBar' component={ComponentsPages.MessageBarPage}/>
              <Route path='/components/notification' component={ComponentsPages.NotificationPage}/>
              <Route path='/components/dialog' component={ComponentsPages.DialogPage}/>
              <Route path='/components/avatar' component={ComponentsPages.AvatarPage}/>
              <Route path='/components/markdown' component={ComponentsPages.MarkdownPage}/>
              <Route path='/icons' component={IconPage}/>
              <Route path='/charts/bar' component={ChartsPages.Bar}/>
              <Route path='/charts/stackbar' component={ChartsPages.StackedBar}/>
              <Route path='/charts/area' component={ChartsPages.Area}/>
              <Route path='/charts/line' component={ChartsPages.Line}/>
              <Route path='/charts/pie' component={ChartsPages.Pie}/>
              <Route path='/charts/scatterplot' component={ChartsPages.Scatterplot}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </div>
          <div className='footer'> 
            <Footer/>
          </div>
          
        </div>
      </div>
      </HashRouter>
      
    )
  }
}

const stateToProps = (state) =>{
  return{
    openSideBar: state.sideBarToggler.openSideBar
  }
}

export default connect(stateToProps)(App);
