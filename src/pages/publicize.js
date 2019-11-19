import Button from '../components/button.js';
import Input from '../components/input.js';

function backPage() {
 let exit = confirm('Deseja sair?');
    if (exit == true){
      window.location.hash = '#events';
}
}

function cleanPublicize(){
  const name = document.querySelector('.js-name').valeu ='';
    const date = document.querySelector('.js-date-event').valeu='';
    const hour = document.querySelector('.js-hour-event').valeu='';
    const email = document.querySelector('.js-email').valeu='';
    const sport = document.querySelector('.js-modality').valeu='';
    const event = document.querySelector('.js-name-event').valeu='';
    const gender = document.querySelector('.js-gender').valeu='';
    const address = document.querySelector('.js-address').valeu='';
    const price = document.querySelector('.js-price').valeu='';
    const additional = document.querySelector('.js-additional-infor').valeu='';
}
  
  function sendEvent(){
    const name = document.querySelector('.js-name').valeu;
    const date = document.querySelector('.js-date-event').valeu;
    const hour = document.querySelector('.js-hour-event').valeu;
    const email = document.querySelector('.js-email').valeu;
    const sport = document.querySelector('.js-modality').valeu;
    const event = document.querySelector('.js-name-event').valeu;
    const gender = document.querySelector('.js-gender').valeu;
    const address = document.querySelector('.js-address').valeu;
    const price = document.querySelector('.js-price').valeu;
    const additional = document.querySelector('.js-additional-infor').valeu;
  const events = {
    name,
    date,
    hour,
    email,
    sport,
    event,
    gender,
    address,
    price,
    additional
  };
  firebase.firestore().collection('divulge').add(events);
  window.publicize.cleanPublicize()
}

function Publicize() {
  const template = `
  <form>
    ${Input({
    class: 'js-name',
    placeholder: 'Nome',
    type: 'text',
  })}
    ${Input({
    class: 'js-email',
    placeholder: 'exemplo@exemplo.com.br',
    type: 'email',
  })}
  ${Input({
    class: 'js-modality',
    placeholder: 'Qual o esporte',
    type: 'txt',
  })}
    ${Input({
    class: 'js-name-event',
    placeholder: 'Nome do Evento',
    type: 'text',
  })}
  ${Input({
    class: 'js-price',
    placeholder: 'Valor do Evento',
    type: 'number',
  })}
  <select class="js-gender" id="select">
  <option value="">Gênero</option>
  <option value="Feminino">Feminino</option>
  <option value="Masculino">Masculino</option>
  <option value="Misto">Misto</option>
  <option value="Outros">Outros</option>
  </select>
  ${Input({
    class: 'js-address',
    placeholder: 'Endereço',
    type: 'text',
  })}
  ${Input({
    class: 'js-date-event',
    type: 'date',
  })}
  ${Input({
    class: 'js-hour-event',
    type: 'time',
  })}
  <textarea rows='8'
  cols='50' placeholder='Informações Complementares'
  class='js-additional-infor'> </textarea>
  ${Button({
    id: 'publicize',
    title: 'Enviar',
    onClick: sendEvent,
  })}
  ${Button({
    id: 'backPage',
    title: 'Voltar',
    onClick: backPage,
  })}
  </form>`;

  return template;
}

window.publicize = {
  cleanPublicize,
}

export default Publicize;