import React from "react";
import "./iconsSection.css";
import {BsBookmarkFill,BsSearch} from "react-icons/bs";

export class IconsSection extends React.Component{

    render(){
        return(
            <div>
                <BsBookmarkFill className="icon" color="2A0B47" size="1em"/>
                <BsSearch idclassName="icon" color="B8C5C7"size="1em"/>
            
                
            </div>
        );
    }
}