import React ,{useState} from 'react';


const Context = React.createContext()

export const Provider = (props) => {
    const [track ,setrack] = useState({
        track_list : [
            {track : {trackname : 'abc'}},
            {track : {track_name : 'sflmsf' }}
        ]
    })
    return (
        <Context.Provider value = {track}>
            {props.children}
        </Context.Provider>
     );
}
 
export const Consumer = Context.Consumer