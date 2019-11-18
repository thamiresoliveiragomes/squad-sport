import Button from "../components/button.js";
function printEvent(post) {
  const eventList = document.querySelector(".eventos");
  const data = post
    .data()
    .data.toDate()
    .toLocaleString("pt-BR");
  const descricao = post.data().descrição;
  const esporte = post.data().esporte;
  const evento = post.data().evento;
  const genero = post.data().gênero;
  const imagem = post.data().imagem;
  const localizacao = post.data().localização;
  const valor = post.data().valor;
  const template = `
    <section class ='card-events'>
    <img src= '${imagem}'/>
    <p>
    Evento: ${evento}
    </p>
    <p>
    Data: ${data}
    </p>
    <p>
    Modaliade: ${esporte}
    </p>
    <p>
    Gênero: ${genero}
    </p>
    <p>
    Localização: ${localizacao}
    </p>
    <p>
    Valor(es): ${valor}
    </p>
    <p>
    Sobre o evento: ${descricao}
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
    `;
    return template;
}
window.app = {
  loadEvent,
  printEvent
};
export default Events;