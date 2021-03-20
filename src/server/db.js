import Axios from 'axios'

// // const DB_URL=`http://ec2-18-203-251-138.eu-west-1.compute.amazonaws.com`
// const DB_URL=`https://udemy-expense-default-rtdb.firebaseio.com/`
const DB_URL='http://localhost:3030'
export const getPicturesFromDB = async () => {
    try {
        const res = await Axios.get(DB_URL+"/get-images");
        const pictures = [];
        for (let id in res.data) {
            pictures.push({
                ...res.data[id]
            });
        }
        return pictures;
    } catch (err) {
        console.log("no pictures");
    }
};

export const postPictureInDB = async (formData) => {
    try {
        const res = await Axios.post(DB_URL+'/upload-image', formData,{
            headers:{
                "Content-Type": 'multipart/form-data'
            }
        });
        return res.data
    } catch (err) {
        console.log(err);
    }
}; 

export const removePictureFromDB = async (id,key) => {
    try {
        await Axios.delete(DB_URL + `/delete-image?key=${key}&id=${id}`);
        return;
    } catch (err) {
        console.log(err);
    }
}; 