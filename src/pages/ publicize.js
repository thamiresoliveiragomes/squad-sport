import Button from '../components/button.js';

function Publicize() {
const template = `
    ${Button({ 
        id:'publicize',
        title: 'publicize',
        // onClick: breve,
    })}

`;

return template;
}

export default Publicize;