import React from "react"
import s from './HeaderProject.module.css'
import logo from '../../img/logo_2.png'
import { NavLink } from 'react-router-dom'

const HeaderProject = () => {
    return (
        <header className={s.header_about}>
            <div className={s.wrap_header_nav}>
                <div className={s.wrap_icons_link}>
                    <NavLink to='/about'>  <div className={`${s.about_icon} ${s.about_icon_name}`}></div></NavLink>
                    <a href="#address"><div className={`${s.about_icon} ${s.about_icon_mail}`}></div></a>
                    <a href="https://www.facebook.com/yagavrilov/" target="_blank" rel="noreferrer"><div className={`${s.about_icon} ${s.about_icon_facebook}`}></div></a>
                    <a href="https://www.instagram.com/yangavrilov/" target="_blank" rel="noreferrer"><div className={`${s.about_icon} ${s.about_icon_insta}`}></div></a>
                    <a href="https://vk.com/designer_yangavrilov" target="_blank" rel="noreferrer"><div className={`${s.about_icon} ${s.about_icon_vk}`}></div></a>
                </div>
            </div>
            <h1 className={s.title_main}> <img src={logo} alt="logo"/> </h1>
        </header>
    )
}

export default HeaderProject