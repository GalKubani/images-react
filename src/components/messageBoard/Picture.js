import React,{ useContext} from 'react';
import { removePictureAction } from '../../actions/PictureAction';
import { PictureContext } from '../../context/PictureContext';
import { removePictureFromDB } from '../../server/db';

const Picture = ({ picture}) => {
    //const URL="https://kubani-photos-storage.s3-eu-west-1.amazonaws.com/images/"
    const URL= "http://imagesserver-env.eba-uemuextf.eu-west-1.elasticbeanstalk.com/get-image"
    const {pictureDispatch}= useContext(PictureContext);
    const RemovePicture=(e)=>{
        e.preventDefault()
        removePictureFromDB(picture._id,picture.key).then(()=>{
            pictureDispatch(removePictureAction({
                picture,
                id:picture._id
            }))
        })
    }
    return (
        <div>
            <img src={URL+ `?key=${picture.key}&name=${picture.originalName}`} alt="" />
            <button onClick={RemovePicture}>Remove</button>
        </div>
    );
};

export default Picture;