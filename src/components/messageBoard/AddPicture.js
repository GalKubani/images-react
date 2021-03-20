import { nanoid } from 'nanoid';
import React, { useContext } from 'react';
import { addPictureAction } from '../../actions/PictureAction';
import { PictureContext } from '../../context/PictureContext';
import { getPicturesFromDB, postPictureInDB } from '../../server/db';

const AddPicture = () => {
    const {pictureDispatch}= useContext(PictureContext);
    const onSubmit = (event) => {
        event.preventDefault();
        const picture = event.target.children[0].children[0].files[0];
        const formData= new FormData()
        formData.append("image",picture)
        postPictureInDB(formData)
        .then(res=>{
            pictureDispatch(addPictureAction({
                res
            }));
            })
        
    };
    return (
        <form onSubmit={ onSubmit }>
            <div className="message-input">
                <input name="image" type="file"/>
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default AddPicture;