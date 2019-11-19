import Events from './pages/events.js';
import Publicize from './pages/publicize.js';
import News from './pages/news.js';
import MapTemplate from './pages/map.js';


function pageRoute() {
  const page = (window.location.hash) ? window.location.hash : '#events';
  switch (page) {
    case '#events':
      document.querySelector('main').innerHTML = Events();
      window.app.loadEvent();
      break;
    case '#publicize':
      document.querySelector('main').innerHTML = Publicize();
      break;
    case '#news':
      document.querySelector('main').innerHTML = News();
      break;
      case '#maps':
      document.querySelector('main').innerHTML = MapTemplate();
      break;
    default:
    document.querySelector('main').innerHTML = Events();
  };    
};



// var url = 'https://newsapi.org/v2/everything?' +
//           'q=esportes&' +
//           'language=pt&' +
//           'sortBy=popularity&' +
//           'apiKey=d16f33243081454ba1f24d06cbbeffe3';

// var req = new Request(url);

// fetch(req)
//     .then(res =>res.json())
//     .then(data => console.log(data))


window.addEventListener('load', pageRoute);
window.addEventListener('hashchange', pageRoute, false);

