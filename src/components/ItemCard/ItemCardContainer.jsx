import React from "react"
import s from './ItemCard.module.css'
import data from '../../state'
import ItemCard from "./ItemCard"

const ItemCardContainer = () => {
    let works = data.map((el, i) => <ItemCard item={el} key={i}/>)
    return <div className={s.wrap_items_card}> { works } </div>
}

export default ItemCardContainer