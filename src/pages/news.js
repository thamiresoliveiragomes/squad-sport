import Button from '../components/button.js';

function News() {
const template = `
    ${Button({ 
        id:'news',
        title: 'news',
        // onClick: breve,
    })}

`;

return template;
}

export default News;