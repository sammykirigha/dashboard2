import { combineReducers} from 'redux';
import { fetchLatestNews } from './newsReducer';

 const rootReducer = combineReducers({
    news: fetchLatestNews
  })

  export default rootReducer