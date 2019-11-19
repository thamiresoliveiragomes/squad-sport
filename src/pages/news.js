import Button from "../components/button.js";
fetch('http://18.228.196.34/r7/mais-esportes')
  .then(res => res.json())
  .then(data => console.log(data));
  
function backPage() {
  window.location.hash = '#events';
}

function Publicize() {
  window.location.hash = '#publicize';
}

function News() {
  const template = `
        ${Button({
          id: "events",
          title: "Eventos",
          onClick: backPage
        })}
        ${Button({
          id: "publicize",
          title: "Divulgue seu evento",
          onClick: Publicize
        })}
    `;

  return template;
}

export default News;
