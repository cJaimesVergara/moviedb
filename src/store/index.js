import axios from "axios";
import { createStore } from "vuex";

const api_key = "<<your api key>>";
const tmdbURL = "https://api.themoviedb.org/3/";
const endPoints = {configuration : `configuration?api_key=${api_key}`,
upcoming : `movie/upcoming?api_key=${api_key}&language=es-MX`, 
};

const store = createStore({
    state(){
        return{
            conf : false,
            images: null,
            upcomingTotalPages: 0,
            currentPage:0,
            upComingMovieData:null,
        };
    },
    getters:{},
    mutations:{
        gettingConf:state=>{
            return state.conf = true;
        },
        setPage:(state, page)=>{
            state.currentPage = page;
        },
        setUpcomingMovieData:(state,data)=>{
            state.upComingMovieData = data;
        },
    },
    actions:{
        getConfiguration({commit}){
            commit('gettingConf');
            let url = tmdbURL+endPoints.configuration;
           

            const options = {
                method : 'GET',
                url
            };

            axios(options)
            .then(response => {
                if (response.data != null){
                    this.state.images = response.data.images;
                }
                
            }).catch(error => {
                console.log(error)
            });
        },
        getUpComingMovies({commit},page = 1){
            commit('setPage', page);
            
            let url = tmdbURL+endPoints.upcoming + "&page=" + page;            

            const options = {
                method : 'GET',
                url
            };
            axios(options)
            .then(response => {
                if (response.data != null){
                    this.state.upcomingTotalPages = response.data.total_pages;
                    commit('setUpcomingMovieData',response.data.results);
                }
            
            }).catch(error => {
                console.log(error)
            });
        },
    },
});

export default store;