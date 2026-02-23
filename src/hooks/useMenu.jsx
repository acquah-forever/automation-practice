import React,{ useState } from 'react'

const useMenu = (initialValue = null) => {
    let [state,setState] = useState(initialValue)

    function toggle (){
        setState(prev => !prev)
    }

  return [state,toggle]
}

export default useMenu
