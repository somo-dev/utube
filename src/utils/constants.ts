import { API_KEY } from "../API_KEY";

export const POPULAR_VIDEO_LIST = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;
export const SEARCH_SUGGESTION_LIST = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';