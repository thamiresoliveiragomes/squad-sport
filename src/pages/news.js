import Button from "../components/button.js";

function backPage() {
  window.location.hash = '#events';
}

function Publicize() {
  window.location.hash = '#publicize';
}

function api() {
  fetch("http://18.228.196.34/ge/futebol-americano")
    .then(res => res.json())
    .then(data => {
      document.querySelector('main').innerHTML = '';
      data.forEach(data => {
        let titleNews = data.title;
        let shortDescriptionNews = data.short_description;
        let imgNews = data.image;
        document.querySelector('main').innerHTML+= News(titleNews, shortDescriptionNews, imgNews)
      });
    });
};

// api();

function News(titleNews, shortDescriptionNews, imgNews) {
  let template =  `
    <div class='container-events'>
      <ul class="eventos">
        <li class ='card-event'>
          <figure class='card-event-img'>
              <img src= '${imgNews}'/>
          </figure>
          <article class='card-event-text'>
            <p>
              <strong>Titulo:</strong> ${titleNews} <br />
              <strong>Notícia:</strong> ${shortDescriptionNews}
            </p>
          </article>
        </li>
      </ul>
      <section class="container-buttons">
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
      </section>
    </div>
  `;
  return template;
}

window.news = {
  api
};

export default News;