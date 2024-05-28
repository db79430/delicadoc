import React from "react";
import './App.css';
import {Navigation} from "./components/navigation/Navigation";
import {MainComponent} from "./components/banner/MainComponent";
import {Play} from "./components/play/Play";
import {Winners} from "./components/winners/Winners";
import {Shops} from "./components/shops/Shops";
import {QuestionAnswer} from "./components/question/QuestionAnswer";
import {Footer} from "./components/footer/Footer";
import Example from "./components/auth/Auth";


function App() {
    return (
        <div className="app-wrapper">
            <Example/>
            <Navigation/>
            <MainComponent/>
            <Play/>
            <Winners/>
            <Shops/>
            <QuestionAnswer/>
            <Footer/>
        </div>
    );
}

export default App;
