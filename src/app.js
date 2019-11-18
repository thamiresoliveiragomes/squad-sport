// import Events from './pages/events.js';
// import Publicize from './pages/publicize.js';
// import News from './pages/news.js';

// function pageRoute() {
//     const breve = (window.location.hash) ? window.location.hash : '#events';
//     switch (breve) {
//         case '#events':
//             document.querySelector('app').innerHTML = Events();
//             break;
//         case '#publicize':
//             document.querySelector('app').innerHTML = Publicize();
//             break;
//         case '#news':
//             document.querySelector('app').innerHTML = News();
//             break;
//         default:
//         document.querySelector('app').innerHTML = Events();
//     };    
// };

// window.addEventListener('load', pageRoute);
// window.addEventListener('hashchange', pageRoute, false);

 
import Events from './pages/events.js';

function init() {
  document.querySelector('main').innerHTML = Events();
}

window.addEventListener('load', init);