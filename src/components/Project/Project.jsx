import React from "react"
import s from './Project.module.css'
import { useLocation} from "react-router-dom"
import { Redirect } from "react-router-dom"
import HeaderAbout from "../HeaderAbout/HeaderAbout"
import { NavLink } from "react-router-dom"
import arrow from '../../img/nazad.png'
import main from '../../img/glavnaya.png'
import IconsLinkAbout from "../IconsLinkAbout/IconsLinkAbout"
import state from '../../state'

const Project = () => {

    let location = useLocation()

    if(!location.response){
        return <Redirect to="/" />
    }

    let wind_chat = document.getElementById('wrap_project')
    if (wind_chat !== null) {
        wind_chat.scrollTo(0, 0);
    }
    
    let res = location.response

    


    return (
        <div className={s.wrap_project} id='wrap_project'>
            <HeaderAbout />
            <h2>{res.name}</h2>
            <img  src={require(`../../img/${res.folder}/${res.files[1]}`).default} alt={`work ${res.name}`} className={s.project_title_img}/>
            <p className={s.project_text}>{res.text}</p>
            {
                res.files.map((e, i) => {
                    if(i > 1)
                        return <img src={require(`../../img/${res.folder}/${e}`).default} alt={`work ${res.name} ${e}`} className={s.project_img} key={i}/>
                    else
                        return null
                })
            }
            <div className={s.block_links}>
                <div className={s.wrap_link_project}>
                    {
                        res.id === state[0].id ? null : (
                            <NavLink to={{
                                pathname: `/project/${state[res.id-2].folder}`,
                                response: state[res.id-2]
                            }}><img src={arrow} alt="icon next" /></NavLink>
                        )
                    }
                </div>
                <div className={s.wrap_link_project}><NavLink to='/'><img src={main} alt="icon main" /></NavLink></div>
                <div className={s.wrap_link_project}>
                    {
                        res.id === state.length ? null : (
                            <NavLink to={{
                                pathname: `/project/${state[res.id].folder}`,
                                response: state[res.id]
                                
                            }}><img src={arrow} alt="icon next" /></NavLink>
                        )
                    }
                </div>
            </div>
            <IconsLinkAbout />
            <footer className={`${s.footer_about} ${s.footer_project}`} >
                <address className={s.address_about} id="address">
                    <span>Developed Aleksander Pavlenko. Designed by Yan Gavrilov</span>
                    <span>designer@yangavrilov.com</span>
                    <span>© Yan Gavrilov</span>
                </address>
            </footer>
        </div>
    )
}

export default Project