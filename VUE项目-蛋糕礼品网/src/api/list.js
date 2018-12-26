import axios from "axios";
axios.defaults.baseURL = "http://localhost:8989";
axios.interceptors.response.use(function (response) {
    return response.data
});

export  let getCake = ()=>{
  return axios.get('/cake')
};

export let getCoffee = ()=>{
    return axios.get('/coffee')
};

export let getIceCream = ()=>{
    return axios.get('/iceCream')
};

export let getGift = ()=>{
    return axios.get('/gift')
};

export let getSliderImgs = ()=>{
    return axios.get("/sliderscy");
}

export  let getlistcy=()=>{
    return axios.get('/home1');
}

export  let getlogin=()=>{
    return axios.get('/login');
}
export let cake =(id)=>{
    return axios.get(`/car?id=${id}`);
};
export let removeCake =(id)=>{
    return axios.delete(`/car?id=${id}`)
};
export let res = (id,num)=>{
    return axios.put(`/car?id=${id}&num=${num}`)
}
export let getInfo = (id)=>{
    return axios.get(`/info?id=${id}`)
};
export let getInfo1 = (id)=>{
    return axios.get(`/info1?id=${id}`)
};