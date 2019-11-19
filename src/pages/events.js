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
        <figure class='card-event-img'>
            <img src= '${image}'/>
        </figure>
        <article class='card-event-text'>
        <p>
            <strong>Evento:</strong> ${event} <br />
            <strong>Data:</strong>${date} <br />
            <strong>Localização:</strong> ${address} <br />
            <strong>Valor:</strong> ${price}
        </p>
        </article>
    </li>
    `;
  eventList.innerHTML += template;
}

function loadEvent() {
  const postCollection = firebase.firestore().collection("events");
  postCollection.orderBy('date', 'desc').get().then(snap => {
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

function Events() {
  const template = `
    <div class='container-events'>
        <ul class="eventos"></ul>
        <section class="container-buttons">
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
        </section>
    </div>
    `;
  return template;
}

window.app = {
  loadEvent,
  printEvent
};

export default Events;
