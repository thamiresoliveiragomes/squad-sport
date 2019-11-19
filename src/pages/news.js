import Button from '../components/button.js';

function backPage() {
    window.location.hash = '#events';
}

function Publicize() {
    window.location.hash = '#publicize';
}

function News() {
    const template = `
        ${Button({ 
            id:'events',
            title: 'Eventos',
            onClick: backPage,
        })}
        ${Button({ 
            id:'publicize',
            title: 'Divulgue seu evento',
            onClick: Publicize,
        })}
    `;

    return template;
}

export default News;