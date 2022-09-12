import React from "react";
import { LeftSide } from "../leftSide/leftSide";
import "./app.css";
import crop from "./crop.jpeg";
import { Header } from "../header/header";
import { CardHeader } from "../cardHeader/cardHeader";
import { Card1 } from "../card1/card1";
import { IconsSection } from "../iconsSection/iconsSection";

export class App extends React.Component{
    render(){
        return(     
            <div id="app_main">
                <div id="app_left_side">
                    <LeftSide />
                </div>
                <div id="app_right_side">
                    <div id="app_header">
                        <Header />
                    </div> 
                    <div id="app_card_header">
                        <CardHeader />
                    </div>
                    <div id="just_icons">
                    <IconsSection />
                </div>
                    <div id="card">
                        <Card1 />
                    </div>
                    <div id="app_graph">
                        <img src={crop} alt="" />
                    </div>
                </div>
                
                
                
                
            </div>
            
        );
    }
}