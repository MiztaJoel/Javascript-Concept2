const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];
  
  function getBooks() {
    return data;
  }
  
  function getBook(id) {
    return data.find((d) => d.id === id);
  }
  
  // Destructuring
  const book = getBook(3);
  book;
  // const title = book.title;
  //const author = book.author;
  
  const { author, title, pages, publicationDate, genres, hasMovieAdaptation } =
    book;
  title;
  
  author;
  console.log(author, title, genres);
  
  // const primaryGenres = genres[0];
  // const secondaryGenres = genres[1];
  
  //now using Destructuring Array
  const [primaryGenres, secondaryGenres] = genres;
  
  console.log(primaryGenres, secondaryGenres);
  
  //Rest operator
  const [primaryGenre, secondaryGenre, ...otherGenress] = genres;
  console.log(primaryGenre, secondaryGenre, otherGenress);
  
  //initial
  const initialGenres = [genres, "epic fantasy"];
  initialGenres;
  //using Spreed operation its remove composite array
  const finalGenre = [...genres, "epic fantasy"];
  finalGenre;
  
  //Usefullness of spread operator
  
  const initialupdatedBook = {
    book,
    moviePublicationDate: "2024-01-10",
  };
  initialupdatedBook;
  const updatedBook = {
    //here we see how spread operator is use to update book with id 1
    //also use to update property
    ...book,
    moviePublicationDate: "2024-01-10",
    //pages:1210,
  };
  updatedBook;
  
  //Arrow function
  // function getYear(str){
  //   return str.split("-")[0];
  // }
  const getYear = (str) => str.split("-")[0];
  
  //Template Literal: are essin javascripts feauture that allows us to easily create
  //springs that contains javascript variable that conatin javacript object in a string
  
  const summary = `${title},a ${pages}-pages long book, was written by ${author}
  publish in ${getYear(publicationDate)}.The book has ${
    hasMovieAdaptation ? "" : "not movies"
  } been adapted has movies`;
  summary;
  
  //TERNARIES OPERATOR:Is used instead of IF/ELSE Statement.
  
  const pageRange = pages > 1000 ? "Over a thousand" : "less than 100";
  pageRange;
  console.log(`The book has ${pageRange} pages`);
  
  // Short-Circuiting and Logical Operator
  // Short circuiting means at certain condition the operator return the first value without looking at second condition
  
  //Short -Circuiting with & operator
  console.log(true && "Some string");
  console.log(false && "some thing");
  console.log(hasMovieAdaptation && "The book has a movie");
  
  //falsy:0,'',null, undefined
  
  console.log("jonas" && "Some string");
  console.log(0 && "Some string");
  
  //Short-Circuiting with Or Operator
  
  console.log(true || "Some string");
  
  console.log(book.translations.spanish);
  const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
  spanishTranslation;
  
  // console.log(book.reviews.librarything.reviewsCount)
  // const countWrong = book.reviews.librarything.reviewsCount || 'no data';
  // countWrong
  
  //This Nullish call operator return second value when the first value is null
  //or undefined but not when it zero or empty
  // const count = book.reviews.librarything.reviewsCount ?? 'no data';
  // count
  //Optional Chain
  function getTotalReviewCout(book) {
    const goodreads = book.reviews?.goodreads?.reviewsCount;
    const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
    librarything;
    return goodreads + librarything;
  }
  
  console.log(getTotalReviewCout(book));
  
  //Array Map Method with map.filter and reduce 
  //bcause this method did not mutate the original array
  
  
  