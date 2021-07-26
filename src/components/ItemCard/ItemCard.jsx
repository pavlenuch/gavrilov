import React from "react"
import s from './ItemCard.module.css'
import { NavLink } from "react-router-dom"

const ItemCard = ({ item }) => {
    return (
        <div className={s.card_block}>
            <NavLink to={{
                pathname: `/project/${item.folder}`,
                response: item
                
            }}>
                <div className={s.bc_block_img}></div>
                <img src={require(`../../img/${item.folder}/${item.files[0]}`).default} alt={`logo ${item.name}`} className={s.card_block_img}/>
            </NavLink>
        </div>
    )
}

export default ItemCard