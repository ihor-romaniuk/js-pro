// Необходимо получить данные с сервера по урлу https://trevadim.github.io/vue/data/data.json,
// и отобразить информацию о планетах

const body = document.querySelector('body');

fetch('https://trevadim.github.io/vue/data/data.json')
    .then(response => response.json())
    .then(({planets}) =>  {
        let count = 0;
        for (planet in planets) {
            count++;
            body.innerHTML += `<div 
                class="section-${count}" 
                style="width: 30%; display: inline-block; vertical-align: top; margin: 0 1.5% 20px;"
                ></div>`;
            createHeader(planets[planet], `.section-${count}`);
            createImg(planets[planet], `.section-${count}`);
            createInfo(planets[planet], `.section-${count}`);
        }
    })
    .catch(error =>  console.log(error));

function createHeader({title}, elem) {
    body.querySelector(elem).innerHTML +=
        `<header 
            style="text-align: center; margin-bottom: 20px; font-size: 22px; font-weight: 700;"
        >${title}</header>`;
}

function createInfo({info}, elem) {
    let infoHTML = info.map(paragraph => `<p>${paragraph}</p>`);
    body.querySelector(elem).innerHTML += infoHTML.join('');
}

function createImg({url, title}, elem) {
    body.querySelector(elem).innerHTML +=
        `<img 
            src="${url}" 
            alt="${title}" 
            style="display: block; width: 100%; height: auto; border-radius: 10px"
        >`;
}

