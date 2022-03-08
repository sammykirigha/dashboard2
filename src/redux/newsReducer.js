import { LOAD_NEWS, LOAD_NEWS_FAIL, LOAD_NEWS_SUCCESS } from "./newsTypes";

export const fetchLatestNews = (state = {news: []}, action) => {
    switch(action.type) {
        case LOAD_NEWS:
            return {
                ...state,
                loading: true
            };
        case LOAD_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: [action.news]
            };
        case LOAD_NEWS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}