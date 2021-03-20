import React from 'react';
import PictureContextProvider from '../../context/PictureContext';
import Home from './Home';



const HomeLoader = (props) => {
    const pictureId = props.match.params.id;
    
    return (
        <PictureContextProvider pictureId={pictureId}>
            <Home />
        </PictureContextProvider>
    );
};

export default HomeLoader;