import axios from 'axios';
import {getHotsMoviesApi, getTop250Api, getSearchTagMoviesApi} from './../api'
import * as actionTypes from './actionTypes'
export const getHotsMoviesAction = (hotsMovies, totalCount) => {
    return {
        type: actionTypes.GET_ALL_HOTSMOVIES,
        hotsMovies,
        totalCount
    }
}
export const GetHotsMovies = () => {
    return (dispatch) => {       
         axios.post(getHotsMoviesApi).then( res => {
        let movies = [];
        let totalCount = res.data.subjects.length/5;
        if(res.data.subjects.length%5 != 0){
            totalCount ++;
        }
        for(let i = 0; i<totalCount;i++){
             let arr = [];
            for( let j = i*5;j<(i*5+5);j++){
                if(res.data.subjects[j] == null && arr.length>0){
                    movies.push(arr);    
                    break;                    
                }
                arr.push(res.data.subjects[j])
                if(j == i*5+4){
                    movies.push(arr);                        
                }
            }
        }
        dispatch(getHotsMoviesAction(movies,totalCount))
    })
    .catch( error => {
        console.log(error)
    })
    }
}
const getTagAction = tagMovies => {
    const actionType = {
        type: actionTypes.GET_TAG_MOVIES,
        tagMovies
    }
    return actionType;
}
export const GetTagMovies = (tag) => {
    return (dispatch) => {
        axios.post(getSearchTagMoviesApi,{
            tag: tag,
            page_limit: 50,
            page_start: 2
        }).then( res => {
            console.log(res)
            let movies = [];
        let totalCount = 2;        
        for(let i = 0; i<totalCount;i++){
             let arr = [];
            for( let j = i*10;j<(i*10+10);j++){
                if(res.data.subjects[j] == null && arr.length>0){
                    movies.push(arr);    
                    break;                    
                }
                arr.push(res.data.subjects[j])
                if(j == i*10+9){
                    movies.push(arr);                        
                }
            }
        }
            dispatch(getTagAction(movies))
        })
        .catch( error => {
            console.log(error)
        })
    }
}