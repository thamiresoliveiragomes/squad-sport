import Button from '../components/button.js';
import Input from '../components/input.js';

function backPage() {
  window.location.hash = '#events';
}

function send(){
  const name = document.querySelector('.js-name').value;
  const date = document.querySelector('.js-date-event').value;
  const email = document.querySelector('.js-email').value;
  const sport = document.querySelector('.js-modality').value;
  const event = document.querySelector('.js-name-event').value;
  const gender = document.querySelector('.js-gender').value;
  const address = document.querySelector('.js-address').value;
  const price = document.querySelector('.js-price').value;
  const events = {
    name,
    date,
    email,
    sport,
    event,
    gender,
    address,
    price,
  };
  firebase.firestore().collection('divulge').add(events);
}

function Publicize() {
  const template = `
  <form>
    ${Input({
    class: 'js-name',
    placeholder: 'Nome',
    type: 'text'
  })}
    ${Input({
    class: 'js-email',
    placeholder: 'exemplo@exemplo.com.br',
    type: 'email'
  })}
  <select class="js-modality" id="select">
  <option value="">Modalidade</option>
  <option value="atletismo">Atletismo</option>
  <option value="corrida">Corrida</option>
  <option value="futebol">Futebol</option>
  <option value="futsal">Futsal</option>
  <option value="handebol">Handebol</option>
  <option value="MMA">MMA</option>
  <option value="natacao">Natação</option>
  <option value="vôlei">Volei</option>
  </select>
    ${Input({
    class: 'js-name-event',
    placeholder: 'Nome do Evento',
    type: 'text'
  })}
  ${Input({
    class: 'js-price',
    placeholder: 'Valor do Evento',
    type: 'number'
  })}
  <select name="js-gender" id="select">
  <option value="">Gênero</option>
  <option value="Feminino">Feminino</option>
  <option value="Masculino">Masculino</option>
  <option value="Misto">Misto</option>
  <option value="Outros">Outros</option>
  </select>
  ${Input({
    class: 'js-address',
    placeholder: 'Endereço',
    type: 'text'
  })}
  ${Input({
    placeholder: 'Data do Evento',
    type: 'data'
  })}
  ${Input({
    placeholder: 'Hora',
    type: 'time',
    class: 'js-date-event',
    placeholder: 'Data do Evento',
    type: 'timestamp'
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

export default Publicize;