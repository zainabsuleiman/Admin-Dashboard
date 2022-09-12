import React from "react";
import man from "./man.jpg";
import "./cardHeader.css";

export class CardHeader extends React.Component{

    render(){
        return(
            <div id="cardHeader_main">
                <header id="cardHeader_content">
                    <div>
                        <h1>Your Courses</h1>
                        <button>PREMIUM</button>
                    </div>
                    <div id="cardHeader_para">
                        <img src={man} alt="this the dog"/>
                        <p>26 courses</p>
                    </div>
                    
                </header>

            </div>
        );
    }
}