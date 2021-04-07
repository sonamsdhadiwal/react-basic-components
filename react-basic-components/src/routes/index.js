import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Required components
import ButtonPage  from '../components/button';
import CheckBoxes from '../components/check-box';
import Dropdown from '../components/dropdown';
import Label from '../components/label';
import RadioButton from '../components/radio-button';

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
        </Switch>
    )
}