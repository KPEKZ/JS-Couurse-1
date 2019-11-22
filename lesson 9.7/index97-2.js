const opennedFilms = {};
document.addEventListener("DOMContentLoaded", function () {
    for (let category of categories)
    {
        const newEl = document.createElement("div");
        newEl.classList.add("category");
        newEl.innerText = category;
        newEl.addEventListener("click", function () {onCategoryChoice(category)});
        document.querySelector(".categories").appendChild(newEl);

    }
});

function getFilmComments(filmName) {
    const film = films.filter(f => f.name === filmName)[0];
    return film.comments;
}

function renderFilm(film) {

    const newEl = document.createElement("div");
    newEl.classList.add("film");
    newEl.innerHTML = `<div class = "film-name"> ${film.name}</div>`;
    newEl.addEventListener("click",function () {
        onFilmClick(film,newEl);
    });
    document.querySelector(".films").appendChild(newEl);
}

function  openFilmCard(film,newEl) {
    const comments = getFilmComments(film.name);
    let s = "";
    comments.forEach(c => (s += `<div class="comment"><span class="comment-author">${c.author}:</span> ${c.text} </div>`));
    newEl.innerHTML += `<div class = "film-comments">${s}</div>`;

    const addCommentButton = document.createElement("button");
    addCommentButton.innerText = "Добавить отзыв";
    newEl.appendChild(addCommentButton);
    opennedFilms[film.name] = true;
}

function onFilmClick(film, newEl) {
    if (opennedFilms.hasOwnProperty(film.name) && opennedFilms[film.name] ===true)
    {
        newEl.innerHTML = `<div class = "film-name"> ${film.name}</div>`;
        opennedFilms[film.name] = false;

    } else
    {
        openFilmCard(film,newEl);
        opennedFilms[film.name] = true;
    }

}

function onCategoryChoice(categoryName)
{
    document.querySelector(".films").innerHTML = "";
    const films = getFilmsByCategory(categoryName);
    for (let film of films)
    {
        renderFilm(film);

    }
}