
export const initialPictureState = {
    pictures: []
};
const PicturesReducer=(picturesState, action)=>{
    switch (action.type) {
        case "ADD_PICTURE":
            return {
                pictures: picturesState.pictures.concat(action.picture.res)
            };     
        case "INIT_HOME":
            return { pictures:picturesState.pictures.concat(action.picturesData) };  
        case "REMOVE_PICTURE":
            return{
                pictures: picturesState.pictures.filter((picture)=>{
                    return picture._id !== action.picture.id
                })
            }
        default:
            return { ...picturesState };
    }
}
export default PicturesReducer;