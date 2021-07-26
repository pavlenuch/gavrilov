import React from "react"
import IconsLink from "../IconsLink/IconsLink"
import s from './Header.module.css'
import logo from '../../img/logo.png'

const Header = () => {

    return (
        <header className={s.header}>
            <div className={s.wrap_header_nav}>
                <IconsLink />
            </div>
            <h1 className={s.title_main}> <img src={logo} alt="logo"/> </h1>
        </header>
    )
}

export default Header