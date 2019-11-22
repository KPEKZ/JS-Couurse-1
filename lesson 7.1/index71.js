const categories = ["Юмор", "Хоррор", "Фантастика", "Драма","Триллер"];
const films = [];
class Comment
{
    constructor(text, author, stars)
    {
        this.text = text;
        this.author = author;
        this.stars = stars;
    }
}
class Film
{
    constructor(name, cat)
    {
        this.name = name;
        this.category = categories[cat];
        this.comments =[];
        this.budgget =0;
        this.expertStars = 3;
    }

     AddComments(text, author, stars)
    {
        this.comments.push(new Comment(text, author, stars));
    }
    getAverageStars()
    {
        let sumStars =0;
        this.comments.forEach(comment=> sumStars+= comment.stars);
        return (this.comments.length>0) ? sumStars / this.comments.length : 0;
    }

}
films.push(new Film("Титаник",0));
films[0].AddComments("Крутой фильм!", "user", 5);
films[0].AddComments("не очень", "user", 3);
films.push(new Film("Один дома", 0));
films[1].AddComments("он действительно один дома", "user2", 4);
films[1].AddComments("а теперь не один", "user2", 2);

films.push(new Film("Ужас", 1));
films.push(new Film("Гарри Поттер", 2));
films.push(new Film("Грустный фильм 1", 3));
films.push(new Film("Грустный фильм 2", 3));
films.push(new Film("Стрелялка", 4));

console.log(films[5].getAverageStars());

function getFilmsByCategory(Cat) {
    const newFilms = [];
    for(let film of films)
    {
        if (film.category ===Cat)
        {
            newFilms.push(film);
        }
    }
    return newFilms;
}

console.log(getFilmsByCategory("Юмор"));