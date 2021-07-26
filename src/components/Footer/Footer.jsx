import React from "react"
import IconsLink from "../IconsLink/IconsLink"
import s from './Footer.module.css'


const Footer = () => {

    return (
        <footer>
            <div className={s.wrap_footer_nav}>
                <IconsLink />
            </div>
            <address id="address">
                <span>Developed Aleksander Pavlenko. Designed by Yan Gavrilov</span>
                <span>designer@yangavrilov.com</span>
                <span>© Yan Gavrilov</span>
            </address>
        </footer>
    )
}

export default Footer