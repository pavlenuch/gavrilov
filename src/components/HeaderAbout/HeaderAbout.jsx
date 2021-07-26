import React from "react"
import IconsLinkAbout from "../IconsLinkAbout/IconsLinkAbout"
import s from './HeaderAbout.module.css'
import logo from '../../img/logo_2.png'

const HeaderAbout = () => {
    return (
        <header className={s.header_about}>
            <div className={s.wrap_header_nav}>
                <IconsLinkAbout />
            </div>
            <h1 className={s.title_main}> <img src={logo} alt="logo"/> </h1>
        </header>
    )
}

export default HeaderAbout