// named import
export const API_KEY ="AIzaSyBAkqTZfYsYhIqfb9AxypBLOI3CE4qFbek";

export const BASE_URL = "https://www.googleapis.com/youtube/v3";
export const YOUTUBE_VIDEO_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

//default import-> 
export default API_KEY;