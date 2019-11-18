import Events from './pages/events.js';
// import Publicize from './pages/publicize.js';
// import News from './pages/news.js';

function pageRoute() {
    const breve = (window.location.hash) ? window.location.hash : '#events';
    switch (breve) {
        case '#events':
            document.querySelector('main').innerHTML = Events();
            break;
        case '#publicize':
            document.querySelector('main').innerHTML = Publicize();
            break;
        case '#news':
            document.querySelector('main').innerHTML = News();
            break;
        default:
        document.querySelector('app').innerHTML = Events();
    };    
};

window.addEventListener('load', pageRoute);
window.addEventListener('hashchange', pageRoute, false);
