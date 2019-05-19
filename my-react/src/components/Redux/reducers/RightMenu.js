const initState= {
    anchorEl: null,
    items: [
      {
        link: "https://www.google.com/",
        name: "Google",
      },
      {
        link: "https://www.baidu.com/",
        name: "Baidu",
      },
      {
        link: "https://www.yahoo.com/",
        name: "Yahoo",
      },
    ]
  }
  
const RightMenu = (
    state=initState,
    action
) => {
    switch(action.type){
      case 'Open_Menu':
        return {
          ...state,
          anchorEl: action.anchorEl,
        }
      case 'Close_Menu':
        return {
          ...state,
          anchorEl: null,
        }
      default:
        return state;
    }
}
  
export default RightMenu
  