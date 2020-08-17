import React, { useState, useEffect } from "react";
import './App.css';
import Header from './Header';
import PreLoader from './PreLoader';
import MainBanner from './MainBanner';
import Services from './Services';
import ContactUs from './ContactUs';
import Description from './Description';
import Owners from './Owners';
import Stats from './Stats';
import Testimonials from './Testimonials';
import Clients from './Clients';
import Footer from './Footer';
import AppContext from './AppContext'
import Signin from './Signin'






const App = () => {


  const [state, setState] = useState(
    {
        posts: [],
        postsLoaded: false,
        loadMore: false
    }
)

const [globalState, setGlobalState] = useState(
  {
      user: {},
      loggedIn: sessionStorage.getItem('jwt') ? 'true' : 'false'
  }
)



useEffect(()=>{
    if(!state.postsLoaded) {
        // Make fetch request to backend
        fetch('http://localhost:3000/posts')
        // Run .json() to convert the backend response
        .then(response => response.json())
        // Change the state for posts array
        .then(json=>{
            setState({ 
                ...state, 
                posts: json,
                postsLoaded: true
            })
        })
        .catch(e=>console.log('error', e))
    }
});




  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
    <div className="App">
    
    
        <Header />
        <MainBanner />
        <Services />
        <ContactUs />
        <Description />
        <Owners />
        <Stats />
        <Testimonials />
        <Clients />
        <Footer />
   

       

{/* { 
globalState.loggedIn === 'true' && 
    <div className="container">        
        { 
            state.posts.map(
                (post)=><Posts 
                image={post.image}
                title={post.username}
                description={post.comment}
                buttonLabel="Read more"
                />
            )
        }
    </div>
} */}

    </div>

    </AppContext.Provider>

  );
}



export default App;
