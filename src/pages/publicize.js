import Button from '../components/button.js';
import Input from '../components/input.js';

function backPage() {
  let exit = confirm('Deseja sair?');
  if (exit == true) {
    window.location.hash = '#events';
  }
}
function cleanPublicize() {
  document.querySelector('.js-name').value = '',
  document.querySelector('.js-date-event').value = '',
  document.querySelector('.js-date-event').value='',
  document.querySelector('.js-email').value = '',
  document.querySelector('.js-modality').value = '',
  document.querySelector('.js-name-event').value = '',
  document.querySelector('.js-gender').value = '',
  document.querySelector('.js-address').value = '',
  document.querySelector('.js-price').value = '',
  document.querySelector('.js-additional-infor').value = ''
}

function sendEvent() {
  const name = document.querySelector('.js-name').value;
  const date = document.querySelector('.js-date-event').value;
  const hours = document.querySelector('.js-hours-event').value;
  const email = document.querySelector('.js-email').value;
  const sport = document.querySelector('.js-modality').value;
  const event = document.querySelector('.js-name-event').value;
  const gender = document.querySelector('.js-gender').value;
  const address = document.querySelector('.js-address').value;
  const price = document.querySelector('.js-price').value;
  const additional = document.querySelector('.js-additional-infor').value;
  const events = {
    name,
    date,
    hours,
    email,
    sport,
    event,
    gender,
    address,
    price,
    additional,
  };
  firebase.firestore().collection('divulge').add(events);
  window.publicize.cleanPublicize()
}

function Publicize() {
  const template = `
  <h2> Preencha os dados do seu evento aqui </h2>
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
    placeholder: 'Valor do Evento R$',
    type: 'number',
    min: '0,00',
    step: '0,01',
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
    placeholder: 'Data do Evento',
    type: 'date',
  })}
  ${Input({
    class: 'js-hours-event',
    placeholder: 'Horario do Evento',
    type: 'time',
  })}
  <textarea rows='8'
  cols='50' placeholder='Informações Complementares'
  class='js-additional-infor'> </textarea>
  ${Button({
    id: 'publicize',
    title: 'Enviar',
    onClick: window.publicize.sendEvent,
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
  sendEvent,
}

export default Publicize;