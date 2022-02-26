import { Request, Response } from 'express';
import ytdl from 'ytdl-core';
import { youtube_parser } from '../utils/youtube_parser';
class GetInfoMusicController {
    async getInfoMusic(request: Request, response: Response) {
        const { link } = request.query; 
        const getIDMusic = youtube_parser(link as string);
        const link_parsed_url = `https://youtube.com/watch?v=${getIDMusic}`;

        const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/;

        if(!regex.test(link as string)) {
            response.status(404).json({ error: "Invalid URL" });
        } else {
            const info = await ytdl.getInfo(link_parsed_url);
            const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
            const urlMusic = audioFormats[0].url;
    
            response.status(200).json({ linkMusic: urlMusic });
        };
    };
};

export default GetInfoMusicController;