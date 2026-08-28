export const MENU_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/250px-Hamburger_icon.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
export const YouTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY;

