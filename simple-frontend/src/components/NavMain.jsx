import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavMain() {
    return (
        <nav>
            <NavLink exact to="/" >home</NavLink>
            <NavLink to="/all-students">All students</NavLink>
            <NavLink to="/all-cohorts">All cohorts</NavLink>
            <NavLink to="/create-student">+ student</NavLink>
            <NavLink to="/create-cohort">+ cohort</NavLink>
        </nav>
    )
}
