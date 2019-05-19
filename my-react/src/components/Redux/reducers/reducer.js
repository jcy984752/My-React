import { combineReducers } from 'redux'
import sideBarToggler from './sideBarToggler.js'
import RightMenu from './RightMenu.js'
import sideBarItems from './sideBarItems.js'

const reducer = combineReducers({
  RightMenu,
  sideBarToggler,
  sideBarItems
})

export default reducer;