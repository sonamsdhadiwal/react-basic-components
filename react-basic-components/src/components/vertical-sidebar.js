//install npm install react-pro-sidebar
// refer https://reactjsexample.com/customizable-and-responsive-react-sidebar-library-with-dropdown-menus/  for properties
//npm install react-icons
import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

class VerticalSidebar extends React.Component {
    render() {
        return(
            <ProSidebar>
                <Menu iconShape="square" >
                <MenuItem >Dashboard</MenuItem>
                <SubMenu title="Components">
                    <MenuItem>Component1</MenuItem>
                    <MenuItem>Component2</MenuItem>
                </SubMenu>
                </Menu>
            </ProSidebar>
        )
    }
}

export default VerticalSidebar;