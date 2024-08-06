import React from "react";
import UserProvider from "./UserProvider";
import MainPage from "./MainPage";


const Home = () =>{
    return (
        <div className="App">
            <header className="AppHeader">
            <UserProvider>
            <MainPage/>
        </UserProvider>
            </header>

        </div>

       
    )
}


export default Home;