function api() {
  fetch("http://18.228.196.34/ge/futebol-americano")
    .then(res => res.json())
    .then(data => {
      document.querySelector('.eventos').innerHTML = '';
      data.forEach(data => {
        let titleNews = data.title;
        let link = data.link;
        let imgNews = data.image;
        const template = `
        <li class ='card-event'>
          <figure class='card-event-img'>
            <img src= '${imgNews}'/>
          </figure>
          <article class='card-event-text'>
            <p>
              <strong>Titulo:</strong> ${titleNews} <br/>
              <a href="${link}" target="blank"><strong>Notícia</strong></a>
            </p>
          </article>
        </li>
        <div>
          <a href="#" class="Begin">🔝</a>
        </div>
        `;
        document.querySelector('.eventos').innerHTML += template
      });
    });
};

function News() {
  let template = `
  <div class='container-events'>
    <ul class="eventos"></ul>
  </div>`
  
  return template;
};

window.news = {
  api
};

export default News;