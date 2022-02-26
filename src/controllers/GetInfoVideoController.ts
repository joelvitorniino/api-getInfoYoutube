import ytdl from "ytdl-core";
import { Request, Response } from 'express';
import axios from 'axios';

class GetInfoVideoController {
    async getInfoVideo(request: Request, response: Response) {    
        const { link } = request.query;

        const responseLink = await axios.get(`https://gcv-api-bot.herokuapp.com/search_video?q=${link}`);

        ytdl.getInfo(responseLink.data.links[0])
            .then(({ formats }) => {
                const { url } = formats[0];

                response.json({ linkVideo: url });
            });
    };
};

export default GetInfoVideoController;