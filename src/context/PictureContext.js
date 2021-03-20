import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { initHomepageAction } from '../actions/PictureAction';
import PicturesReducer, { initialPictureState } from '../reducers/pictureReducer';
import { getPicturesFromDB } from '../server/db';

export const PictureContext= createContext();

const PictureContextProvider=(props)=>{
    const [pictureState,pictureDispatch]=useReducer(PicturesReducer,initialPictureState)
    // const history= useHistory()

    useEffect(()=>{
        let isComponentExist=true;
        getPicturesFromDB().then((pictureData)=>{
            if(isComponentExist) pictureDispatch(initHomepageAction(pictureData))
        },(err)=>{
            // if(err.message==="No messages found"){
            //     history.push("/messageboard")
            // }
        })
        return()=>{
            isComponentExist=false;
        }
    },[])
    return(
        <PictureContext.Provider value={{pictureState,pictureDispatch}}>
            {props.children}
        </PictureContext.Provider>

    )
}
export default PictureContextProvider;