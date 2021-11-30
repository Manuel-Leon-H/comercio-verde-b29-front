import Vue from 'vue';

export async function fetchArtesanias({ state, commit, dispatch, rootState }){
    return Vue.axios.get('/artesanias').then(res => {
        commit('setArtesanias',res.data)
    }).catch(err =>{
        console.log(err)
    }).finally(()=>{
        console.log("artesanias obtenidas")
    });
}

export async function eliminarArtesania({ dispatch },artesania){
    return Vue.axios.delete(`/artesanias/${artesania._id}`).catch(err =>{
        console.log(err)
    }).finally(()=>{
        dispatch('fetchArtesanias');
        console.log("Producto Eliminado")
    });
}

