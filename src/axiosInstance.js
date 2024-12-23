import axios from "axios";

// const instance = axios.create({
//     baseURL: "http://localhost:3000"
// })

// cyclic backend 
// const instance = axios.create({
//     baseURL: "https://good-rose-elephant-toga.cyclic.app"
// })

// render backend 
const instance = axios.create({
    baseURL: "https://chaokaiqi.onrender.com"
})


export default instance