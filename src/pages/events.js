import Button from "../components/button.js";
function printEvent(post) {
  const eventList = document.querySelector(".eventos");
  const date = post
    .data()
    .date.toDate()
    .toLocaleString("pt-BR");
<<<<<<< HEAD
  const descricao = post.data().descrição;
  const esporte = post.data().esporte;
  const evento = post.data().evento;
  const genero = post.data().gênero;
  const imagem = post.data().imagem;
  const localizacao = post.data().localização;
  const valor = post.data().valor;
=======
  const additional = post.data().additional;
  const sport = post.data().sport;
  const event = post.data().event;
  const gender = post.data().gender;
  const image = post.data().image;
  const address = post.data().address;
  const price = post.data().price;

>>>>>>> 1c9f3a018e74261324044432e2c5e3ed905cd082
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
<<<<<<< HEAD
    Modaliade: ${esporte}
=======
    Modaliade: ${sport} 
>>>>>>> 1c9f3a018e74261324044432e2c5e3ed905cd082
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
<<<<<<< HEAD
=======



>>>>>>> 1c9f3a018e74261324044432e2c5e3ed905cd082
window.app = {
  loadEvent,
  printEvent
};
export default Events;