import Button from "../components/button.js";

function activeFilter(){
  document.querySelector('#sidebar').classList.toggle('active')
}

function freeEvents() {
  document.querySelector('.eventos').innerHTML ='';
  firebase.firestore().collection('events').where('price', '==', 'Gratuito').get()
  .then((querySnapshot) => {
    querySnapshot.forEach((post) => {
      window.app.printEvent(post);
    });
  });
};

function filterSports(sport) {
  document.querySelector('.eventos').innerHTML ='';
  firebase.firestore().collection('events').where('sport', '==', sport.trim()).get()
  .then((querySnapshot) => {
    querySnapshot.forEach((post) => {
      window.app.printEvent(post);
    });
  });
};

function filterGender(gender) {
  document.querySelector('.eventos').innerHTML ='';
  firebase.firestore().collection('events').where('gender', '==', gender.trim()).get()
  .then((querySnapshot) => {
    querySnapshot.forEach((post) => {
      window.app.printEvent(post);
    });
  });
};

function printEvent(post) {
  const eventList = document.querySelector(".eventos");
  const date = post
    .data()
    .date
    .toDate()
    .toLocaleString("pt-BR");
  const event = post.data().event;
  const image = post.data().image;
  const address = post.data().address;
  const price = post.data().price;

  const template = `
    <li class ='card-event'>
      <div class='card-event-img'>
        <img src= '${image}'/>
      </div>
      <div class='card-event-text'>
        <p>
          <strong>Evento:</strong> ${event} <br />
          <strong>Data:</strong> ${date} <br />
          <strong>Localização:</strong> ${address} <br />
          <strong>Valor:</strong> ${price} <br />
        </p>
      </div>
    </li>
  `;
  eventList.innerHTML += template;
};

function loadEvent() {
  document.querySelector('.eventos').innerHTML ='';
  const postCollection = firebase.firestore().collection('events');
  postCollection.orderBy('price', 'desc').get().then(snap => {
    snap.forEach(post => {
      window.app.printEvent(post);
    });
  });
};

function Publicize() {
  window.location.hash = '#publicize';
};

function News() {
  window.location.hash = '#news';
};

function Events() {
  const template = `
    <div class="wrapper">
      <nav id="sidebar" class="active">
        <ul class="list-unstyled components">
          <li>${Button({class: "link", title: "Eventos Gratuitos", onClick: freeEvents,})}</li>
          <li>
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle link">Esportes</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li>${Button({class: "link", title: "Basquete", onClick: filterSports})}</li>
              <li>${Button({class: "link", title: "Corrida", onClick: filterSports})}</li>
              <li>${Button({class: "link", title: "Handebol", onClick: filterSports})}</li>
              <li>${Button({class: "link", title: "MMA", onClick: filterSports})}</li>
              <li>${Button({class: "link", title: "Natação", onClick: filterSports})}</li>
              <li>${Button({class: "link", title: "Skate", onClick: filterSports})}</li>
              <li>${Button({class: "link", title: "Volêi", onClick: filterSports})}</li>
              <li>${Button({class: "link", title: "Zumba", onClick: filterSports})}</li>
            </ul>
          </li>
          <li>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle link">Gênero</a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>${Button({class: "link", title: "Feminino", onClick: filterGender})}</li>
              <li>${Button({class: "link", title: "Masculino", onClick: filterGender})}</li>
              <li>${Button({class: "link", title: "Misto", onClick: filterGender})}</li>
            </ul>
          </li>
          <li dropdown-toggle>${Button({class: "link", title: "Ver todos os eventos", onClick: window.app.loadEvent})}</li>
        </ul>
      </nav>
      <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            ${Button({id: "sidebarCollapse", title:"Filtrar", icone: "fas fa-filter", onClick: activeFilter})}
          </div>
        </nav>
        <div class='container-events'>
          <ul class="eventos"></ul>
          <div class="container-buttons">
            ${Button({
              id: "news",
              title: "Notícias",
              onClick: News
            })}
            ${Button({
              id: "publicize",
              title: "Divulgue seu evento",
              onClick: Publicize
            })}
          </div>
        </div>
      </div>
    </div>
  `;

  return template;
};

window.app = {
  loadEvent,
  printEvent
};

export default Events;