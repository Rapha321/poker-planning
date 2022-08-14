import React, {useState, createContext} from 'react'

// On utilise le hook useContext() pour pouvoir passer les information bi-directionnel

export const BoardContext = createContext()

export const BoardProvider = (props) => {
    
    const [board, setBoard] = useState({})

    return (
        // On passe le state board comme props au children. 
        // Les children sont defini dans App.js
        <BoardContext.Provider value={[board, setBoard]}>
            {props.children}
        </BoardContext.Provider>
    )

}