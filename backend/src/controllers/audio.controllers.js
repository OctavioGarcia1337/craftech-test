import {pool} from "../db.js"

export const getAudios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM audio');
        res.json(rows);
    }catch(error){
        return res.status(500).json({
            message: 'Something went wrong.'
        })
    }
};

export const extractYoutubeId = (url) => {
    const videoIdMatch = url.match(/(?:\/|%3D|v=|vi=)([0-9A-Za-z-_]{11})(?:[^\w-]|$)/);
    return videoIdMatch ? videoIdMatch[1] : null;
};

export const postAudio = async (req, res) => { 
    const {
        youtube_id, 
    } = req.body;

    const youtubeId = extractYoutubeId(youtube_id); 
    
    try {
        const [rows] = 
        await pool.query('INSERT INTO audio(youtube_id) VALUES (?)', [ youtubeId ])
        res.send({
            id: rows.insertId,
            youtubeId, 
        })
    }catch(error){
        return res.status(500).json({
            message: 'Something went wrong.'
        })
    }
};

/*

export const getAudio = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM audio WHERE id=?', [req.params.id]) ;
        if(rows.length <= 0) return res.status(404).json({
            message: 'Audio not found.'
        });
    
        res.json(rows[0]);
    }catch(error){
        return res.status(500).json({
            message: 'Something went wrong.'
        })
    }
};

export const patchAudio = async (req, res) => {
    const {id} = req.params; //const id = req.params.id;
        const {
            youtube_id, 
        } = req.body;

    try {
        const [result] = await pool.query('UPDATE audio SET youtube_id = IFNULL(?), WHERE id = ?',
            [
            youtube_id,
            id
            ]
        )
        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Audio not found.'
        });
    
    
        const [rows] = await pool.query('SELECT * FROM audio WHERE id = ?', [id])
        res.json(rows[0]);
    }catch(error){
        return res.status(500).json({
            message: 'Something went wrong.'
        })
    }
};

*/
export const deleteAudio = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM audio WHERE youtube_id = ?', [req.params.youtube_id]) ;
        if(result.affectedRows <= 0) return res.status(404).json({
            message: 'Audio not found.'
        });
    
        res.sendStatus(204);
    }catch(error){
        return res.status(500).json({
            message: 'Something goes wrong.'
        })
    }
};

