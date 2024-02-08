import { Router } from "express";
import { 
    getAudios, 
    postAudio, 
    //getAudio, 
    //patchAudio, 
    //deleteAudio, 
} from "../controllers/audio.controllers.js";


const router = Router();

router.get('/audio', getAudios);

router.post('/audio', postAudio);

//router.get('/audio/:id', getAudio);

//router.patch('/audio/:id', patchAudio);

//router.delete('/audio', deleteAudio);

export default router;