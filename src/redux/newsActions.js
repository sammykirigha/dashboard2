import { LOAD_NEWS, LOAD_NEWS_FAIL, LOAD_NEWS_SUCCESS } from "./newsTypes"

export const getLatestNews = () => {
    return ({
        type: LOAD_NEWS,
    })
}

export const getLatestNewsSuccess = (news) => {
    return ({
        type: LOAD_NEWS_SUCCESS,
        news
    })
}

export const getLatestNewsFail = (error) => {
    return ({
        type: LOAD_NEWS_FAIL,
        error
    })
}