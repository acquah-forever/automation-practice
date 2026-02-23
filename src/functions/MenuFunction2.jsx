import React from 'react'
import { Menu, X } from 'lucide-react'

const MenuFunction2 = (props) => {
    return (
        <div>
            <button className='cursor-pointer space-x-2 border p-2 rounded-lg' onClick={props.toggle}>
                {props.menuIsOpen ? <X /> : <Menu />}
            </button>
        </div>
    )
}

export default MenuFunction2
