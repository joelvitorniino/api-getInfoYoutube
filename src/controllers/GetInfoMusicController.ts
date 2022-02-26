import { Request, Response } from 'express';
import ytdl from 'ytdl-core';

class GetInfoMusicController {
    async getInfoMusic(request: Request, response: Response) {
        const { link } = request.query;  
        const info = await ytdl.getInfo(link as string);
        const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
        const urlMusic = audioFormats[0].url;

        response.json({ linkMusic: urlMusic });
    };
};

export default GetInfoMusicController;