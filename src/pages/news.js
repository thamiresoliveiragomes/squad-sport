import Button from "../components/button.js";
  
function backPage() {
  window.location.hash = '#events';
}

function Publicize() {
  window.location.hash = '#publicize';
}

function api() {
  console.log('teste')
  fetch("http://18.228.196.34/ge/futebol-americano")
    .then(res => res.json())
    .then(data => {
      document.querySelector('main').innerHTML = '';
      data.forEach(data => {
        let titleNews = data.title;
        let link = data.link;
        let imgNews = data.image;
        document.querySelector('main').innerHTML+= News(titleNews, link, imgNews)
      });
    });
};

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

window.news = {
  api
};

export default News;

