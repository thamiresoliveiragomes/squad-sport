import Button from '../components/button.js';

function printEvent(post) {
    const eventList = document.querySelector('.eventos');
    const data = post.data().date.toDate().toLocaleString('pt-BR');
    const descricao = post.data().descrição;
    const esporte = post.data().esporte;
    const evento = post.data().evento;
    const genero = post.data().gênero;
    const imagem = post.data().imagem;
    const localizacao = post.data().local;
    const valor = post.data().valor;
  
    const template =`
    ${data}, ${descricao}, ${esporte}, 
    ${evento}, ${genero}, ${imagem},
    ${localizacao}, ${valor} `
    eventList.innerHTML += template
  }

  function loadEvent() {
    const postCollection = firebase.firestore().collection('events');
    const postList = document.querySelector('.eventos');
    postCollection.get().then((snap) => {
      postList.innerHTML = '';
      snap.forEach((post) => {
        printData(post);
      });
    });
  }
  
function Events() {
const template = `
    <li class="eventos"></li>
    ${Button({ 
        id:'events',
        title: 'events',
        // onClick: breve,
    })}

`;

return template;
}

window.app = {
    loadEvent,
    printEvent,
}

export default Events;