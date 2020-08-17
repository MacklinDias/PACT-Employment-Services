import React, { useState, useContext } from 'react';
import AppContext from './AppContext';

const ApplyButton = () => {

    const [state, setState] = useState(
        {
            status: 'logged-out',
            label: 'Apply'
        }
    )

    const [globalState, setGlobalState] = useContext(AppContext);

    const loginHandler = () => {
       if(state.status === 'logged-in') {
            setState({
                ...state, 
                status: 'logged-out',
                label: 'Apply'
            });

            setGlobalState({
                ...globalState,
                loggedIn: 'false'
            })

        } else {
            setState({
                ...state, 
                status: 'logged-in',
                label: 'Applied'
            });

            setGlobalState({
                ...globalState,
                loggedIn: 'true'
            })
        }
        
    }

    return(
        <button onClick={loginHandler} className="btnn btn-prime">
            { state.label }
        </button>
    )
}

export default ApplyButton;