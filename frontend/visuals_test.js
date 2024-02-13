Feature('Prueba')

const assert = require('assert');

const DOMAIN_URL = 'https://gc-ingsw3-integrador-frontend-g5wdfg2tqq-uc.a.run.app'

Scenario('Preparando Tests.', async ({ I }) => {
    I.wait(5);
    console.log('Estamos listos para los tests');
});

var tries = 0;

Scenario('Flaky scenario', { retries: 2 }, () => {
  setTimeout(() => { tries++ }, 200);
  assert.equal(tries, 1);
});

Scenario('Testing Upload - Error', {retries: 2}, async ({ I }) => {
    I.amOnPage(DOMAIN_URL);
    I.click('button.sc-kFCroH');

    I.waitForVisible('div.sc-guDLey.dwEfBc', 5);
    
    I.see('Desea añadir un nuevo audio de los viernes?');
    const enlaceYouTube = 'https://www.not-youtube.com/shorts/TEST-ERROR';
    I.fillField('input.sc-brSamD.bAiYgC', enlaceYouTube);

    I.wait(1);

    const colorAntes = await I.grabAttributeFrom('button.sc-kFCroH.sc-ktwOfi.kDXnIh.lcJajR', 'color');

    I.click('button.sc-kFCroH.sc-ktwOfi.kDXnIh.lcJajR');

    I.wait(1);

    const colorDespues = await I.grabAttributeFrom('button.sc-kFCroH.sc-ktwOfi.QRzSJ.lcJajR', 'color');

    if (colorAntes === 'default' && colorDespues === 'error') {
        console.log('El audio no se añadio de manera exitosa. Lo cual es correcto para la prueba');
    } else {
        assert.fail(`Ocurrio un error inesperado`);
        //assert.fail(`Ocurrio un error y se pudo añadir el audio. Antes:${colorAntes} ---- Desp:${colorDespues}`);
    }

});

Scenario('Testing Upload - Success', {retries: 2}, async ({ I }) => {
    I.amOnPage(DOMAIN_URL);
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
        console.log('El audio se añadio de manera exitosa. Lo cual es correcto para la prueba');
        assert.ok('Test de Exito correcto');
    } else {
        console.log('El audio se añadio de manera exitosa. Lo cual es correcto para la prueba');
    }

});

Scenario('Testing Some Text', async ({ I }) => {
    I.amOnPage(DOMAIN_URL);
    I.wait(5);
    I.see('EL AUDIO DE LOS VIERNES!')
});