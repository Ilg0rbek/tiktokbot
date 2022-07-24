import axios from "axios";
export const getVideoOrAudio = () => {
    const options = {
        method: 'GET',
        url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index',
        params: {
            url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index'
        },
        headers: {
            'X-RapidAPI-Key': '5427f3ec67mshcb96a1308fd0163p1c4941jsn3cefcd8d87bd',
            'X-RapidAPI-Host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error.message);
    });
}