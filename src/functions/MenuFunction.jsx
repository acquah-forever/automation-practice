import React from 'react'
import { Menu, X } from "lucide-react"

const MenuFunction = (props) => {
    return (
        <div>
            <button onClick={props.toggle}>
                {props.menuIsOpen ? <X className='cursor-pointer' /> : <Menu className='cursor-pointer' />}
            </button>
        </div>
    )
}
export default MenuFunction
