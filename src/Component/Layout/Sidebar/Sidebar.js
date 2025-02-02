import React from 'react'
import css from './Sidebar.module.css'
import { MdSpaceDashboard, msSpaceDashboard } from 'react-icons/md'
import { AiFillCalendar, AiOutlineTable } from 'react-icons/ai'
import { FasTask, FaTasks } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className={css.container}>
            <img src="./assests/logo.png" alt="" className={css.logo} width={100}/>
            <div className={css.menu}>
                <NavLink to="dashboard" className={css.item} title={"Dashboard"} >
                    <MdSpaceDashboard size={30} />
                </NavLink>
                <NavLink to="calendar" className={css.item} title='Calender'>
                    <AiFillCalendar size={30}/>
                </NavLink>
                <NavLink to="board" className={css.item} title='Trello board'>
                    <FaTasks size={30}/>
                </NavLink>
                <NavLink to="users" className={css.item} title='Users'>
                    <AiOutlineTable size={30}/>
                </NavLink>
            </div>
        </div>
    )
}
