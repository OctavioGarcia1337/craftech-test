import { assert } from 'chai';
import fetch from 'node-fetch';

describe('Backend API Tests', () => {
    
    it('Testing Backend is up', async () => {
        const response = await fetch('http://localhost:8080/');
        const data = await response.json();

        assert.equal(response.status, 200);
    });

    it('PING PONG TEST', async () => {
        const response = await fetch('http://localhost:8080/ping');
        const data = await response.json();

        assert.equal(response.status, 200);
    });

    it('Testing POST req it should insert a new youtube_id equal to TEST', async () => {
        const audio = {
            youtube_id: 'TEST',
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

    it("Testing GET req it should get all the youtube_id's", async () => {
        const response = await fetch('http://localhost:8080/api/audio');
        const data = await response.json();

        assert.equal(response.status, 200);
    });

    it('Testing DELETE req it should delete the youtube_id equal to TEST', async () => {


        const deleteResponse = await fetch('http://localhost:8080/api/audio/TEST', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        assert.equal(deleteResponse.status, 204);
    });
});