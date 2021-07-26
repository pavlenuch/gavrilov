import React from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import ItemCardContainer from "./ItemCard/ItemCardContainer"
import s from './StylePages.module.css';

const Main = () => {
    return (
        <div className={s.main}>
            <Header />
            <ItemCardContainer />
            <Footer />
        </div>
    )
}

export default Main