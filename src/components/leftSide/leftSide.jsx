import React from "react";
import "./style.css";
import woman from "./woman.jpg";
import woman1 from "./woman1.jpg";
import blueBg from "./blueBg.jpeg";
import {BsLayers,BsFolder2Open,BsLightning, BsTrophy, BsChat} from 'react-icons/bs'
import {FiLifeBuoy} from "react-icons/fi";
import {CgCircleci} from "react-icons/cg";


let tutor1 ={
    imageSrc: woman,
    name:"Kathln Murphy",
    occupation: "PHP developer"
}
let tutor2 ={
    imageSrc: blueBg,
    name:"Annette Black",
    occupation: "Python Developer"
}
let tutor3 ={
    imageSrc: woman1,
    name:"Eleanor Pena",
    occupation: "UI Designer"
}
class Tutor extends React.Component{
    render(){
        return(
            <div id="left_side_tutors">
                <div>
                    <img src={this.props.image} alt=""/>
                </div>
                <div id="left_side_names">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.occupation}</p>
                </div> 
                    <BsChat className="left_side_chat"/>
                                
                </div>
        );
    }
}
export class LeftSide extends React.Component{

    render(){
        return(
            <div id="left_side_main">
                <header id="left_side_header" className="left_side_section">
                    <CgCircleci size="2em" color="3561da" id="logo"/>
                    <h1>Orizon Academy</h1>
                    <h3>Learning with Fun</h3>
                    
                </header>
                <section id="left_side_first_section" className="left_side_section">
                    <ul id="left_side_menu">
                        <li className="hey"><BsLayers/><p>My Courses</p></li>
                        <li className="hey"><BsFolder2Open/> <p>Bookmarks</p></li>
                        <li className="hey"><BsLightning/><p>Trending Courses</p></li>
                        <li className="hey"><FiLifeBuoy/><p>Help Articles</p> <span>6</span></li>
                        <li className="hey"><BsTrophy/><p>Completed Courses</p></li>
                    </ul>
                </section>
                <section id="left_side_last_section" className="left_side_section">
                        <p><h1>My Tutors </h1> <span>13</span></p>
                        <div id="tutor">
                            <Tutor name={tutor1.name} image={tutor1.imageSrc} occupation={tutor1.occupation}/>
                            <Tutor name={tutor2.name} image={tutor2.imageSrc} occupation={tutor2.occupation}/>
                            <Tutor name={tutor3.name} image={tutor3.imageSrc} occupation={tutor3.occupation}/>
                            <Tutor name={tutor1.name} image={tutor1.imageSrc} occupation={tutor1.occupation}/>
                            <Tutor name={tutor2.name} image={tutor2.imageSrc} occupation={tutor2.occupation}/>
                        </div>
                            
                            
                </section>
            </div>
        );
    }
}