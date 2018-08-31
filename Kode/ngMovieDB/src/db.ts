import { UserModel } from "./app/areas/user/models/user";
import { CommentModel } from "./app/areas/movie/comment/models/comment";
import { MovieModel } from "./app/areas/movie/models/movie";

export const moviesDb: MovieModel[] = [
  {
    id: "3452359234",
    img: "starwars.jpg",
    title: "Star wars: The return of the jedi",
    rating: "5",
    description: "Lorem ipsum dolor sit amet, habemus vivendum interpretaris eu cum, an malis labore equidem eam, torquatos maiestatis sit ex. Liber simul qui an, has elit zril ne. Ea sed putent tamquam intellegebat, quo id stet melius, an vivendo torquatos vix. Enim soluta iracundia per in. Qui meliore indoctum cu, mel mollis insolens ea. Purto partem epicuri ex nam, ad discere corrumpit ius. Pri blandit fabellas id, mazim volutpat mel ut. Adhuc postulant ex mea. Populo suscipit ad per, eu duo meis postea. Cum purto vidit an.",
    comments: [{ id: "84739823" }, { id: "23584734" }]
  },
  {
    id: "6543486381",
    img: "titanic.jpg",
    title: "Titanic",
    rating: "4",
    description: "Lorem ipsum dolor sit amet, habemus vivendum interpretaris eu cum, an malis labore equidem eam, torquatos maiestatis sit ex. Liber simul qui an, has elit zril ne. Ea sed putent tamquam intellegebat, quo id stet melius, an vivendo torquatos vix. Enim soluta iracundia per in. Qui meliore indoctum cu, mel mollis insolens ea. Purto partem epicuri ex nam, ad discere corrumpit ius. Pri blandit fabellas id, mazim volutpat mel ut. Adhuc postulant ex mea. Populo suscipit ad per, eu duo meis postea. Cum purto vidit an.",
    comments: [{ id: "23521142" }]
  },
  {
    id: "9583463495",
    img: "spiderman.jpg",
    title: "Spiderman",
    rating: "2",
    description: "Lorem ipsum dolor sit amet, habemus vivendum interpretaris eu cum, an malis labore equidem eam, torquatos maiestatis sit ex. Liber simul qui an, has elit zril ne. Ea sed putent tamquam intellegebat, quo id stet melius, an vivendo torquatos vix. Enim soluta iracundia per in. Qui meliore indoctum cu, mel mollis insolens ea. Purto partem epicuri ex nam, ad discere corrumpit ius. Pri blandit fabellas id, mazim volutpat mel ut. Adhuc postulant ex mea. Populo suscipit ad per, eu duo meis postea. Cum purto vidit an.",
    comments: [{ id: "725991472" }, { id: "94583342" }]
  }
];

export const commentsDb: CommentModel[] = [
  {
    id: "84739823",
    movieId: "3452359234",
    userId: "483029384",
    title: "Loved it!",
    comment: "I totally loved this movie!"
  },
  {
    id: "23584734",
    movieId: "3452359234",
    userId: "923429184",
    title: "Very addictive",
    comment: "Cant wait for the next movie in this awesome series!"
  },
  {
    id: "94583342",
    movieId: "9583463495",
    userId: "182019882",
    title: "Cool effects, bad story",
    comment:
      "I cant put my finger on it, but something was off with the storyline."
  },
  {
    id: "23521142",
    movieId: "6543486381",
    userId: "483029384",
    title: "Not my cup of tea",
    comment: "The movie was ok. Just not my cup of tea."
  },
  {
    id: "725991472",
    movieId: "9583463495",
    userId: "923429184",
    title: "Super fan of the comics!",
    comment: "I love how the movie is very close to the comic books!"
  }
];

export const userDb: UserModel[] = [
  { id: "182019882", name: "Hazar Askari", avatar: "avatar1.png" },
  { id: "923429184", name: "Tom Henrik Hansen", avatar: "avatar3.png" },
  { id: "483029384", name: "Christine Gustavsen", avatar: "avatar2.png" }
];
