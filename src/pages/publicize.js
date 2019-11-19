import Button from '../components/button.js';
import Input from '../components/input.js';

function backPage() {
 let exit = confirm('Deseja sair?');
    if (exit == true){
      window.location.hash = '#events';
}
}
const name = document.querySelector('.js-name')
const date = document.querySelector('.js-date-event')
const hour = document.querySelector('.js-hour-event')
const email = document.querySelector('.js-email')
const sport = document.querySelector('.js-modality')
const event = document.querySelector('.js-name-event')
const gender = document.querySelector('.js-gender')
const address = document.querySelector('.js-address')
const price = document.querySelector('.js-price')
const additional = document.querySelector('.js-additional-infor')

function cleanPublicize(){
  name.value ='';
   date.value='';
   hour.value='';
   email.value='';
   sport.value='';
   event.value='';
   gender.value='';
   address.value ='';
   price.value='';
   additional.value='';
}


function sendEvent(){
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
  <main class="publicize-main"></main>
  <section class="form-event">
    <form class="event-data">
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
    <option value="null">Gênero</option>
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
      class='js-additional-infor'> 
    </textarea> 
    <div class="btn">
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
    </div>     
    </form>
  </section>`;

  return template;
}

window.publicize = {
  cleanPublicize,
}

export default Publicize;