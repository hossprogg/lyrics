
import React from 'react';
import {Consumer} from '../../context'

const Track = () => {
    return (
        <Consumer>
          {value =>{
            console.log(value)
          }}
        </Consumer>//why it don t works in lowercase letter 
      );
}

export default Track;