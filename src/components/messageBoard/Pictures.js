import React, { useContext } from 'react'
import { PictureContext } from '../../context/PictureContext'
import Picture from './Picture'

// will use reducer to import the messages

const Pictures=()=>{
    const{pictureState}=useContext(PictureContext)
    console.log(pictureState)
    return(
        <div>
            { pictureState.pictures.map((picture)=>(
                <Picture key={picture.key} picture={ picture } />
            ))
            }
        </div>
    )
}
export default Pictures