import Button from "../components/button.js";
function api() {
  fetch("http://18.228.196.34/ge/volei")
    .then(res => res.json())
    .then(data => {
      data.map(data => {
        let titleNews = data.title;
        let shortDescriptionNews = data.short_description;
        let imgNews = data.image;
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
function News(data) {
  const template = `
    <div class='container-events'>
      <ul class="eventos">
        <li class ='card-event'>
          <figure class='card-event-img'>
              // <img src= ''/>
          </figure>
          <article class='card-event-text'>
            <p>
                Titulo: <br />
                Notícia: 
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
