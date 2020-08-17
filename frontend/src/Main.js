import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css'
import App from './App';
import ContactUsForm from './ContactUsForm';
import AboutUs from './AboutUs';
import ManpowerPage from './ManpowerPage';
import Signin from './Signin';
import CurrentOpenings from './CurrentOpenings';
import Signup from './Signup';
import Error from './Error';
import Success from './Success'
import AppContext from './AppContext';
import ProfilePage from './ProfilePage';


const PrivateRoute = ({ component: Component, ...restOfProps }) => {

    const [globalState] = useContext(AppContext);

    return (
        <Route {...restOfProps} render={
            (props)=> globalState.loggedIn === 'true' ? 
                <Component {...props} /> :
                <Redirect to={'/login'} />
        } />
    )
}


const Main = () => {

    const [globalState, setGlobalState] = useState(
        {
            userid: sessionStorage.getItem('userid') ? sessionStorage.getItem('userid') : null,
            loggedIn: sessionStorage.getItem('jwt') ? 'true' : 'false',
            
        }
    )


    return (
       
        <AppContext.Provider value={[globalState, setGlobalState]}>
        <BrowserRouter>
        <Switch>
        <Route path ="/" exact component={App}></Route>
        <Route path ="/about" component={AboutUs}></Route>
        <Route path ="/success" component={Success}></Route>
        <Route path ="/contact" component={ContactUsForm}></Route>
        <Route path ="/outsourcing" component={ManpowerPage}></Route>
        <PrivateRoute path ="/jobs" component={CurrentOpenings}/>
        <PrivateRoute path ="/profile" component={ProfilePage}/>
        <Route path ="/register" component={Signup}></Route>
        <Route path ="/login" component={Signin}></Route>
        <Route path ="*" component={Error}></Route>
        </Switch>
        </BrowserRouter>
        </AppContext.Provider>

    )

}

export default Main;