import Button from '../components/button.js';
import Input from '../components/input.js';

function Publicize() {
  const template = `
  <form>
    ${Input({

    placeholder: 'Nome',
    type: 'text'
  })}
    ${Input({

    placeholder: 'exemplo@exemplo.com.br',
    type: 'email'
    
  })}
  <select name="modality" id="select">
  <option value="">Modalidade</option>
  <option value="atletismo">Atletismo</option>
  <option value="corrida_de_rua">Corrida de Rua</option>
  <option value="futebol">Futebol</option>
  <option value="futsal">Futsal</option>
  <option value="handebol">Handebol</option>
  <option value="natacao">Natação</option>
  <option value="vôlei">Volei</option>
  </select>
    ${Input({

    placeholder: 'Nome do Evento',
    type: 'text'
  })}
  ${Input({

    placeholder: 'Valor do Evento',
    type: 'number'
  })}
  <select name="gender" id="select">
  <option value="">Gênero</option>
  <option value="Feminino">Feminino</option>
  <option value="Masculino">Masculino</option>
  <option value="Misto">Misto</option>
  <option value="Outros">Outros</option>
  </select>
  ${Input({

    placeholder: 'Endereço',
    type: 'text'
  })}
  ${Input({

    placeholder: 'Data do Evento',
    type: 'data'
  })}
  ${Input({

    placeholder: 'Hora',
    type: 'time'
  })}
  <textarea rows='8'
  cols='50' placeholder='Informações Complementares'
  class=''> </textarea>
  ${Button({
    id: 'publicize',
    title: 'Enviar',
    onClick: send,
  })}
  ${Button({
    id: 'publicize',
    title: 'Voltar',
    // onClick: breve,
  })}
</form>
`;

  return template;
}

export default Publicize;