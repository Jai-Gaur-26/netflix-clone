import axios from "axios";

//create() is provided by axios
//base URL to make requests to the movie database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

//every instance that we create will be appended to the baseURL created above
instance.get('/foo-bar');//this is an instance. the url would look like https://api.themoviedb.org/3/foo-bar

export default instance;
//we can have only one export default instance,
//                 but multiple const instance