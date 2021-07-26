import React from "react"
import { NavLink } from "react-router-dom";
import s from './IconsLink.module.css'
import { GoMail } from 'react-icons/go';
import { ImFacebook } from 'react-icons/im';
import { RiInstagramLine} from 'react-icons/ri';

const IconsLink = () => {

    return (
        <div className={s.wrap_icons_link}>
            <NavLink to='/about'><div className={`${s.block_icon} ${s.icon_name}`}></div></NavLink>
            <div className={s.block_icon_post}> 
                <a href="#address"><GoMail/></a>  
            </div>
            <a href="https://www.facebook.com/yagavrilov/" target="_blank" rel="noreferrer">
                <div className={s.block_icon}> <ImFacebook className={s.icon_face}/> </div>
            </a>
            <a href="https://www.instagram.com/yangavrilov/" target="_blank" rel="noreferrer">
                <div className={`${s.block_icon} ${s.icon_i}`}> <RiInstagramLine className={s.icon_insta}/> </div>
            </a>
            <a href="https://vk.com/designer_yangavrilov" target="_blank" rel="noreferrer"><div className={`${s.block_icon} ${s.icon_vk}`}> </div></a>
        </div>
    )
}

export default IconsLink