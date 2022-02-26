import { Request, Response } from 'express';
import ytdl from 'ytdl-core';
import axios from 'axios';

class GetInfoMusicController {
    async getInfoMusic(request: Request, response: Response) {
        const { link } = request.query;  
        const responseLink = await axios.get(`https://gcv-api-bot.herokuapp.com/search_video?q=${link}`);

        const info = await ytdl.getInfo(responseLink.data.links[0]);
        const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
        const urlMusic = audioFormats[0].url;

        response.json({ linkMusic: urlMusic });
    };
};

export default GetInfoMusicController;