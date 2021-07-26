import React from "react"
import { NavLink } from "react-router-dom";
import s from './IconsLinkAbout.module.css'
import { AiOutlineHome} from 'react-icons/ai'

const IconsLinkAbout = () => {
    return (
        <div className={s.wrap_icons_link}>
            <NavLink to='/'>  <div className={`${s.about_icon} ${s.about_icon_name}`}><AiOutlineHome /></div></NavLink>
            <a href="#address"><div className={`${s.about_icon} ${s.about_icon_mail}`}></div></a>
            <a href="https://www.facebook.com/yagavrilov/" target="_blank" rel="noreferrer"><div className={`${s.about_icon} ${s.about_icon_facebook}`}></div></a>
            <a href="https://www.instagram.com/yangavrilov/" target="_blank" rel="noreferrer"><div className={`${s.about_icon} ${s.about_icon_insta}`}></div></a>
            <a href="https://vk.com/designer_yangavrilov" target="_blank" rel="noreferrer"><div className={`${s.about_icon} ${s.about_icon_vk}`}></div></a>
        </div>
    )
}

export default IconsLinkAbout