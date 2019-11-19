import Button from "../components/button.js";
function api() {
  fetch("http://18.228.196.34/ge/volei")
    .then(res => res.json())
    .then(data => {
      data.map(item => {
        let titleNews = item.title;
        let shortDescriptionNews = item.short_description;
        let imgNews = item.image;
        return titleNews, shortDescriptionNews, imgNews
      });
    });
};

function backPage() {
  window.location.hash = '#events';
}

function Publicize() {
  window.location.hash = '#publicize';
}
function News(titleNews, shortDescriptionNews, imgNews) {
  const template = `
    <div class='container-events'>
      <ul class="eventos">
        <li class ='card-event'>
          <figure class='card-event-img'>
              <img src= '${imgNews}'/>
          </figure>
          <article class='card-event-text'>
            <p>
                Titulo: ${titleNews} <br />
                Notícia: ${shortDescriptionNews}
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

export default News;
