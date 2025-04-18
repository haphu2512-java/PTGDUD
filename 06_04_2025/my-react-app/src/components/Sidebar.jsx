import React from "react";
import { NavLink } from "react-router-dom";
import Image1858 from "../assets/Image1858.png"
import Group from "../assets/Group.png"
import Squaresfour1 from "../assets/Squaresfour1.png"
import Piechart from "../assets/Piechart.png"
import Groups from "../assets/Groups.png"
import Chat from "../assets/Chat.png"
import Folder from "../assets/Folder.png"
import Code from "../assets/Code.png"


function Sidebar() {
    return (
        <div className="col-md-2 bg-white h-screen p-4 border-r border-gray-200" >
            <div className="mb-4">
                <img src={Image1858}></img>
            </div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink
                        to="/"
                        className={'nav-link'}
                    >
                        <img src={Squaresfour1}></img> Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/projects"
                        className={'nav-link'}
                    >
                        <img src={Folder}></img> Projects
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/teams"
                        className={'nav-link'}
                    >
                        <img src={Groups}></img> Teams
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/analytics"
                        className={'nav-link'}
                    >
                        <img src={Piechart}></img> Analytics
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/messages"
                        className={'nav-link'}
                    >
                        <img src={Chat}></img> Messages
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/integration"
                        className={'nav-link'}
                    >
                        <img src={Code}></img> Integration
                    </NavLink>
                </li>
            </ul>
            <div className="mt-auto text-center p-3 bg-light rounded-3">
                <img src={Group}></img>
                <p className="mb-1 fw-bold">V2.0 is available</p>
                <button className="btn btn-outline-primary btn-sm">Try now</button>
            </div>
        </div>
    );
}

export default Sidebar;