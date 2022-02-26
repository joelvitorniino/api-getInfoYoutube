import ytdl from "ytdl-core";
import { Request, Response } from 'express';
import { youtube_parser } from "../utils/youtube_parser";

class GetInfoVideoController {
    async getInfoVideo(request: Request, response: Response) {    
        const { link } = request.query;
        const getIDVideo = youtube_parser(link as string);
        const link_parsed_url = `https://youtube.com/watch?v=${getIDVideo}`;

        ytdl.getInfo(link_parsed_url)
            .then(({ formats }) => {
                const { url } = formats[0];

                response.json({ linkVideo: url });
            });
    };
};

export default GetInfoVideoController;