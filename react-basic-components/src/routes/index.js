import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page1 from '../components-zoom/page1';
import Accord from '../components/Accordion/accordion-main';

//Required components
import ButtonPage  from '../components/button';
import CheckBoxes from '../components/check-box';
import Dropdown from '../components/dropdown';
import HorizontalNavbar from '../components/HorizontalNavbar';
import Label from '../components/label';
import RadioButton from '../components/radio-button';
import VerticalSidebar from '../components/vertical-sidebar';
import WebcamCapture from '../components-zoom/page2';


//isPrivate currently has no influence currently but will be used to redirect later based on user permission

/**
 * 
 * We want to be able to redirect our user inside our app automatically based on some events, 
 * like returning him to Sign In page if he press logout button for example. 
 * To handle this we will use a library called history.
 */
export default function Routes() {

    return (
        <Switch>
            <Route path="/" exact component={ButtonPage}/>
            <Route path='/label' component={Label} isPrivate/>
            <Route path='/dropdown' component={Dropdown} />
            <Route path='/checkbox' component={CheckBoxes} />
            <Route path='/radiobutton' component={RadioButton} />
            <Route path='/horizonatalBar' component={HorizontalNavbar} />
            <Route path='/verticalbar' component={VerticalSidebar} />
            <Route path="/newWindow" component={WebcamCapture}/>
            
            {/* <Route path='/accordion' component={Accord} /> */}
            <Route path='/page1' component={Page1} />
            
        </Switch>
    )
}