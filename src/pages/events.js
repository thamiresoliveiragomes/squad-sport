import Button from "../components/button.js";
function printEvent(post) {
  const eventList = document.querySelector(".eventos");
  const date = post
    .data()
    .date
    .toDate()
    .toLocaleString("pt-BR");
  const additional = post.data().additional;
  const sport = post.data().sport;
  const event = post.data().event;
  const gender = post.data().gender;
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
            Evento: ${event} <br />
            Data: ${date} <br />
            Modaliade: ${sport} <br />
            Gênero: ${gender} <br />
            Localização: ${address} <br />
            Valor(es): ${price} <br />
            Sobre o evento: ${additional}
        </p>
        </div>
    </li>
    
    `;
  eventList.innerHTML += template;
}
function loadEvent() {
  const postCollection = firebase.firestore().collection("events");
  postCollection.orderBy('price', 'desc').get().then(snap => {
    snap.forEach(post => {
      printEvent(post);
    });
  });
}
function Publicize() {
  window.location.hash = '#publicize';
}
function News() {
  window.location.hash = '#news';

}

function Maps() {
  window.location.hash = '#map';

}
function Events() {
  const template = `
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
        ${Button({
            id: "map",
            title: "Mapa",
            onClick: Maps
        })}
        </div>
    </div>
    `;
  return template;
}

window.app = {
  loadEvent,
  printEvent
};
export default Events;
