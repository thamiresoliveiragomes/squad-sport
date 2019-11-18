import Button from '../components/button.js';

function Events() {
const template = `
    ${Button({ 
        id:'events',
        title: 'events',
        // onClick: breve,
    })}

`;

return template;
}

export default Events;