import React from "react"
import HeaderAbout from "./HeaderAbout/HeaderAbout"
import photo from '../img/aboutphoto.png'
import text from '../img/abouttext.png'
import { NavLink } from "react-router-dom"
import arrow from '../img/nazad.png'
import state from '../state'
import s from './StylePages.module.css'

const About = () => {
    return (
        <div className={s.about}>
            <HeaderAbout />
            <img src={photo} alt="me" className={s.about_photo}/>
            <p className={s.about_text}>Hello everyone, who is looking for the realization of their ideas and ideas. You are lucky. The time has come to your dreams and realize my creative skills.
            My name is Ian Gavrilov. Together we will “recover” all your projects.
            About me: a child looking for an outlet for their creative imaginations with scattered. Defeat art.
            And this is not surprising, because the union of my parents, apparently, was the starting point of my abilities.
            An endless flow of ideas, decisions, findings flowing from my mom, and embodies it all – my dad, he just “golden hands”.
            Their skills, I tried to develop in its path – a graphic designer.
            Along with high school artistic inclination, finished children’s art school.
            Was finally adopted in the choice, he finished two higher artistic university. I have the experience, proven quality and originality in the performance.
            With great interest and attention I relate to all offers.
            Nice to meet you, and commonwealth. Sincerely, Jan Gavrilov.</p>
            <div className={s.block_links}>
                <NavLink to='/'><img src={arrow} alt="icon back" /></NavLink>
                <NavLink to={{
                    pathname: `/project/${state[0].folder}`,
                    response: state[0]
                }}><img src={arrow} alt="icon next" /></NavLink>
            </div>
            <footer className={s.footer_about}>
                <address className={s.address_about} id="address">
                    <span>Developed Aleksander Pavlenko. Designed by Yan Gavrilov</span>
                    <span>designer@yangavrilov.com</span>
                    <span>© Yan Gavrilov</span>
                </address>
            </footer>
        </div>
    )
}

export default About