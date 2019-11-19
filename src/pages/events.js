import Button from "../components/button.js";

function printEvent(post) {
  const eventList = document.querySelector(".eventos");
  const date = post
    .data()
    .date.toDate()
    .toLocaleString("pt-BR");
  const additional = post.data().additional;
  const sport = post.data().sport;
  const event = post.data().event;
  const gender = post.data().gender;
  const image = post.data().image;
  const address = post.data().address;
  const price = post.data().price;

  const template = `
    <section class ='card-events'>
    <img src= '${image}'/>
    <p>
    Evento: ${event}
    </p>
    <p>
    Data: ${date}
    </p>
    <p>
    Modaliade: ${sport} 
    </p>
    <p>
    Gênero: ${gender}
    </p>
    <p>
    Localização: ${address}
    </p>
    <p>
    Valor(es): ${price}
    </p>
    <p>
    Sobre o evento: ${additional}
    </p>
    </section>
    `
    
  eventList.innerHTML += template;
}

function loadEvent() {
  const postCollection = firebase.firestore().collection("events");
  postCollection.get().then(snap => {
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
        <ul class="eventos"></ul>
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
        ${Button({ 
          class: 'js-genero',
          id:'filter',
          title: 'Filtros',
          // onClick: templateFilter,
        })}
        
    `;

    return template;
}



window.app = {
  loadEvent,
  printEvent
};

export default Events;
