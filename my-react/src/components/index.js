import * as Icons from '@material-ui/icons/';
import * as Charts from 'react-vis';
import * as Router from 'react-router-dom';
import Footer from './Footer';
import ListItemTemplate from './ListItemTemplate';
import NotFoundPage from './NotFoundPage';
import TabsTemplate from './TabsTemplate';
import IconPage from './SideNavPages/IconPage'
import HomePage from './SideNavPages/HomePage'
import ColorsPage from './SideNavPages/ColorsPage'
import * as ComponentsPages from './SideNavPages/Components'
import * as ChartsPages from './SideNavPages/Charts'
import CodeBlock from './CodeBlock';
import ReactMarkdown from 'react-markdown'
import reducer from './Redux/reducers/reducer.js'



// export all components, Icons, Charts
export * from '@material-ui/core/';
export { Icons, Charts, Router, Footer, ListItemTemplate, NotFoundPage, TabsTemplate, IconPage, HomePage, ColorsPage, ComponentsPages, ChartsPages, CodeBlock, ReactMarkdown, reducer};
