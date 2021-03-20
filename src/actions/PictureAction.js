export const addPictureAction=(picture)=>({
    type:"ADD_PICTURE",
    picture
})
export const removePictureAction=(picture)=>({
    type:"REMOVE_PICTURE",
    picture
})
export const initHomepageAction=(picturesData)=>({
    type:"INIT_HOME",
    picturesData
})