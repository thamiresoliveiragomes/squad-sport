import Button from '../components/button.js';
import Input from '../components/input.js';

function backPage() {
 let exit = confirm('Deseja sair?');
    if (exit == true){
      window.location.hash = '#events';
}
}

function cleanPublicize(){
  const name = document.querySelector('.js-name').value = '';
  const date = document.querySelector('.js-date-event').value = '';
  const hour = document.querySelector('.js-hour-event').value = '';
  const email = document.querySelector('.js-email').value = '';
  const sport = document.querySelector('.js-modality').value = '';
  const event = document.querySelector('.js-name-event').value = '';
  const gender = document.querySelector('.js-gender').value = '';
  const address = document.querySelector('.js-address').value = '';
  const price = document.querySelector('.js-price').value = '';
  const additional = document.querySelector('.js-additional-infor').value = '';
}

function send(){
  const name = document.querySelector('.js-name').value;
  const date = document.querySelector('.js-date-event').value;
  const hour = document.querySelector('.js-hour-event').value;
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
    placeholder: 'Valor do Evento R$',
    type: 'number',
    min: '0.01',
    step: '0.01',
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
    pattern: '{2}\{2}\{4} {2}:{2}',
    placeholder:'Ex.: 00/00/0000 00:00',
    type: 'datetime-local',
    min: '1',
  })}
  <textarea rows='8'
  cols='50' placeholder='Informações Complementares'
  class='js-additional-infor'> </textarea>
  ${Button({
    id: 'publicize',
    title: 'Enviar',
    onClick: send,
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