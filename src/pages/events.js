import Button from '../components/button.js';

function Publicize() {
    window.location.hash = '#publicize';
}

function News() {
    window.location.hash = '#news';
}

function Events() {

    const template = `
        ${Button({ 
            id:'news',
            title: 'Notícias',
            onClick: News,
        })}
        ${Button({ 
            id:'publicize',
            title: 'Divulgue seu evento',
            onClick: Publicize,
        })}
    `;

    return template;
}

export default Events;