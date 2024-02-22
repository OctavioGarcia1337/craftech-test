import { assert } from 'chai';
import fetch from 'node-fetch';
import { extractYoutubeId } from './src/controllers/audio.controllers.js';

describe('Backend API Tests', () => {
    
    it('Testing Backend is up', async () => {
        const response = await fetch('http://localhost:8080/');
        const data = await response.json();

        assert.equal(response.status, 200);
    });

    it('Testing extractYoutubeId', async () => {
        
        const YoutubeLink = 'https://www.youtube.com/watch?v=XMpYGx8xBl0';
        const YoutubeID = 'XMpYGx8xBl0TEST';
        
        
        assert.equal(YoutubeID, extractYoutubeId(YoutubeLink), "El YoutubeID se extrajo con éxito");
        
    });

    it('Integration - PING PONG TEST', async () => {
        const response = await fetch('http://localhost:8080/ping');
        const data = await response.json();

        assert.equal(response.status, 200);
    });

    it('Integration - Testing POST req it should insert a new youtube_id', async () => {
        const audio = {
            youtube_id: 'https://www.youtube.com/watch?v=WdoXZf-FZyA',
        };

        const postResponse = await fetch('http://localhost:8080/api/audio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(audio)
        });

        assert.equal(postResponse.status, 200);
    });

    it("Integration - Testing GET req it should get all the youtube_id's", async () => {
        const response = await fetch('http://localhost:8080/api/audio');
        const data = await response.json();

        assert.equal(response.status, 200);
    });

    it('Integration - Testing DELETE req it should delete the youtube_id', async () => {



        const deleteResponse = await fetch('http://localhost:8080/api/audio/WdoXZf-FZyA', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        assert.equal(deleteResponse.status, 204);
    });
});
