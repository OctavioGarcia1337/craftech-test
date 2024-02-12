Feature('Prueba')

const assert = require('assert');

//const URL = 'http://localhost:3000';
const URL = 'https://gc-ingsw3-integrador-frontend-g5wdfg2tqq-uc.a.run.app'


Scenario('Testing Some Text', ({ I }) => {
    I.wait(10);
    I.amOnPage(URL);
    I.wait(5);
    I.see('EL AUDIO DE LOS VIERNES!')
    I.see('Octavio Garcia 2004033 - UCC - Ingeniería en Software III - 2024')
});

Scenario('Testing Upload - Success', async ({ I }) => {
    I.wait(10);
    I.amOnPage(URL);
    I.click('button.sc-kFCroH');

    I.waitForVisible('div.sc-guDLey.dwEfBc', 5);
    
    I.see('Desea añadir un nuevo audio de los viernes?');
    const enlaceYouTube = 'https://www.youtube.com/shorts/x2vguwCs2nQ';
    I.fillField('input.sc-brSamD.bAiYgC', enlaceYouTube);

    I.wait(1);

    const colorAntes = await I.grabAttributeFrom('button.sc-kFCroH.sc-ktwOfi.kDXnIh.lcJajR', 'color');

    I.click('button.sc-kFCroH.sc-ktwOfi.kDXnIh.lcJajR');

    I.wait(1);

    const colorDespues = await I.grabAttributeFrom('button.sc-kFCroH.sc-ktwOfi.hOikIJ.lcJajR', 'color');

    if (colorAntes === 'default' && colorDespues === 'success') {
        console.log('El audio se añadio de manera exitosa.');
    } else {
        assert.fail(`Ocurrio un error inesperado`);
        //assert.fail(`Ocurrio un error añadiendo el audio. Antes:${colorAntes} ---- Desp:${colorDespues}`);
    }

});



Scenario('Testing Upload - Error', async ({ I }) => {
    I.amOnPage(URL);
    I.click('button.sc-kFCroH');

    I.waitForVisible('div.sc-guDLey.dwEfBc', 5);
    
    I.see('Desea añadir un nuevo audio de los viernes?');
    const enlaceYouTube = 'https://www.youtube.com/shorts/TEST-ERROR';
    I.fillField('input.sc-brSamD.bAiYgC', enlaceYouTube);

    I.wait(1);

    const colorAntes = await I.grabAttributeFrom('button.sc-kFCroH.sc-ktwOfi.kDXnIh.lcJajR', 'color');

    I.click('button.sc-kFCroH.sc-ktwOfi.kDXnIh.lcJajR');

    I.wait(1);

    const colorDespues = await I.grabAttributeFrom('button.sc-kFCroH.sc-ktwOfi.QRzSJ.lcJajR', 'color');

    if (colorAntes === 'default' && colorDespues === 'error') {
        console.log('El audio no se añadio de manera exitosa.');
    } else {
        assert.fail(`Ocurrio un error inesperado`);
        //assert.fail(`Ocurrio un error y se pudo añadir el audio. Antes:${colorAntes} ---- Desp:${colorDespues}`);
    }

});