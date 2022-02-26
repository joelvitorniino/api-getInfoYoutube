import ytdl from "ytdl-core";
import { Request, Response } from 'express';

class GetInfoVideoController {
    async getInfoVideo(request: Request, response: Response) {    
        const { link } = request.query;

        ytdl.getInfo(link as string)
            .then(({ formats }) => {
                const { url } = formats[0];

                response.json({ linkVideo: url });
            });
    };
};

export default GetInfoVideoController;