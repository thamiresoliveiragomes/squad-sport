import Button from '../components/button.js';

function Publicize() {
const template = `
    ${Button({ 
        id:'publicize',
        title: 'publicize',
        // onClick: breve,
    })}
    ${Input({ 
        
        placeholder: 'Nome',
        type: 'Nome'
    })}
    ${Input({ 
        
        placeholder: 'exemplo@exemplo.com.br',
        type: 'email'
    })}
    ${Input({ 
        
        placeholder: 'Senha',
        type: 'password'
    })}

`;

return template;
}

export default Publicize;