import React/*, { useState }*/ from "react"
import './IconsLink.css'
import { GoMail } from 'react-icons/go';
import { ImFacebook } from 'react-icons/im';
import { RiInstagramLine} from 'react-icons/ri';

const IconsLink = () => {

    return (
        <div className='wrap_icons-link'>
            <div className='block_icon icon_name'></div>
            <div className='block_icon'> <GoMail /> </div>
            <div className='block_icon'> <ImFacebook className='icon-face'/> </div>
            <div className='block_icon'> <RiInstagramLine className='icon-insta'/> </div>
            <div className='block_icon icon-vk'> </div>
        </div>
    )
}

export default IconsLink