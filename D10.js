/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10;
sum += 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 20);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Salvatore",
  surname: "Desole",
  age: 26
}
console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["C#", "JS", "Markup: html e css"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("New Element")
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop()
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  let random = Math.floor(Math.random() * 6) +1;
  return random
}
dice()
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(num1, num2) {
  if(num1 > num2) {
    return num1
  } else if (num2 > num1) {
    return num2
  }
}
whoIsBigger(2, 3)
console.log(whoIsBigger(2, 3));
whoIsBigger(5, 3)
console.log(whoIsBigger(5, 3));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(string) {
  return string.split(" ");
}
let result = splitMe("Ciao mi chiamo Salvatore");
console.log(result)

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(string, bool) {
  if (bool === true) {
    return string.slice(1); // Rimuove il primo carattere
  } else {
    return string.slice(0, -1); // Rimuove l'ultimo carattere
  }
}
let risultato1 = deleteOne("Buongiorno", true);
console.log(risultato1)
let risultato2 = deleteOne("Buongiorno", false);
console.log(risultato2)

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(string) {
  let result = "";

  for(let i=0; i<string.length; i++) {
    let char = string[i];

    if(isNaN(char) || char === " ") { //quindi se il carattere NON è un numero O è === a uno spazio
      result += char;                 //aggiungi il carattere alla stringa
    }
  }
  return result;
}
let stringOnlyLetters = onlyLetters("In campagna ho 2 cani e 3 gatti");
console.log(stringOnlyLetters);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(string) {
  let emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  
  return emailRegex.test(string) //con test posso vedere se corrisponde ad una stringa e mi restituisce true o false
}
let correctEmail = isThisAnEmail("salvatoredesole1998@gmail.com");
console.log(correctEmail);
let incorrectEmail = isThisAnEmail("salvatoredesole1998@.com");
console.log(incorrectEmail);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  return new Date()
}
whatDayIsIt()
console.log(whatDayIsIt()) /* -------------------RITORNARCI */
//non riesco

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  function dice() {
  let random = Math.floor(Math.random() * 6) +1;
  return random
}
dice()
console.log(dice());

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(num) {

  let resultRoll = {
    sum: 0,     //somma dei valori estratti
    values: []  //array dei valori estratti
  }
  
  for(let i=0; i<num; i++) {
    let roll = dice();
    resultRoll.sum += roll;
    resultRoll.values.push(roll);
  }

  return resultRoll 
}
let roll = rollTheDices(3);
console.log(roll)

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(date) {

  let today = new Date();

  let differenceInMilliseconds = today - date;

 let differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  return differenceInDays;
}
let date = new Date(2024, 11, 2); 
console.log(howManyDays(date)); //13 - 2 = 11 giorni passati

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday() {
  myBirthday = new Date(8, 6)

  let today = new Date();
  
  if(myBirthday === today) {
    return true
  } else {
    return false
  }
}
isTodayMyBirthday();
console.log(isTodayMyBirthday());

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(obj, string) {
  if (typeof obj !== "object" || obj === null || typeof string !== "string") {
    return "Errore: il primo parametro deve essere un oggetto e il secondo una stringa.";
  }

  delete obj[string];

  return obj;
}

let obj = {
  name: "Salvatore",
  age: 26,
  city: "Sassari",
};
deleteProp(obj, "string")
console.log(deleteProp(obj, "city")); 
console.log(deleteProp(obj, "sassari")); 

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie() {
  let counter = 1970;
  for(let i = 0; i < movies.length; i++){
    let year = parseInt(movies[i].Year);
    if(year > counter) {
      counter = year;
    }
  }
  return counter;
}/* inserito la chiamata alla funzione sotto l'oggetto movies */


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies() {
  let counter = 0; 

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Type === "movie") {
      counter++; 
    }
  }

  return counter; 
}/* inserito la chiamata alla funzione sotto l'oggetto movies */

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears() {
let arr = []
for (let i = 0; i < movies.length; i++) {
    let year = movies[i].Year;
    arr.push(year)
  }
  return arr
}/* inserito la chiamata alla funzione sotto l'oggetto movies */

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium() {
  let arr = []
for (let i = 0; i < movies.length; i++) {
    let year = parseInt(movies[i].Year);
    if(year < 2000){
      arr.push(year)
    }
  }
  return arr
}/* inserito la chiamata alla funzione sotto l'oggetto movies */

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears() {
  let sum = 0;
for (let i = 0; i < movies.length; i++) {
    let year = parseInt(movies[i].Year);
    sum += year 
  }
  return sum
}/* inserito la chiamata alla funzione sotto l'oggetto movies */


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(string) {
  if (typeof string !== "string") {
    return "Errore: il parametro deve essere una stringa.";
  }

  let moviesTitle = [];

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(string)) {
      moviesTitle.push(movies[i]); 
    }
  }

  return moviesTitle; 
}/* inserito la chiamata alla funzione sotto l'oggetto movies */

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(string) {
  if (typeof string !== "string") {
    return "Errore: il parametro deve essere una stringa.";
  }

  let divide = {
    match: [],
    unmatch: []
  }
  
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(string)) {
      divide.match.push(movies[i]); 
    } else {
      divide.unmatch.push(movies[i]); 
    }
  }
  return divide;
}/* inserito la chiamata alla funzione sotto l'oggetto movies */

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(i) {
  if (typeof i !== "number" || i < 0 || i >= movies.length) {
    return "Errore: l'indice deve essere un numero valido";
  }

  let newMovies = movies.slice();

  newMovies.splice(i, 1);

  return newMovies;
}/* inserito la chiamata alla funzione sotto l'oggetto movies */

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
let selezionaContainer = () => {
  const container = document.querySelector("#container");
  return container;
}
selezionaContainer()

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
let selezionaTag = () => {
  const tag = document.querySelectorAll("td");
  return tag;
}
selezionaTag()

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

let printTag = () => {
  const tag = document.querySelectorAll("td");

  tag.forEach(td => {
    console.log(td.innerText);
  });
}
printTag();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
let linkBackgroundColor = () => {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.style.backgroundColor = "red";
  });
}
linkBackgroundColor();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
let addElementList = () => {
  const list = document.querySelector("#myList");

  let li = document.createElement("li")

  list.appendChild(li)
}
/* addElementList(); */

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
let emptyList = () => {
  const list = document.querySelector("#myList");

  list.innerHTML = "";
}
/* emptyList(); */

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
let addClassTest = () => {
  const tr = document.querySelectorAll("tr");

  tr.forEach(tr => {
    tr.classList.add("test");
  });
}
/* addClassTest(); */

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

let halfTree = (num) => {
  for (let i = 1; i <= num; i++) {
    let row = ""; // Stringa vuota per costruire la riga

    // aggiunge un asterisco alla riga per ogni livello
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
halfTree(3);


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
let Tree = (num) => {
  for (let i = 1; i <= num; i++) {
    let row = ""; 

    for (let j = 1; j <= 2; j++) {
      row += " ";
    }

    for (let k = 1; k <= i; k++) {
      row += "*";
    }
    console.log(row);
  }
} //non riesco
Tree(3);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(num) {
  
  if (typeof num !== "number" || num <= 1) {
    return false + " non è un numero primo";
  }

  for (let i = 2; i < num; i++) {

    if (num % i === 0) {
      return false + " non è un numero primo";
    }
  }

  return true + " è un numero primo";
}/* inserito la chiamata alla funzione sotto l'oggetto movies */


/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

newestMovie()
console.log(newestMovie())

countMovies()
console.log(countMovies())

onlyTheYears()
console.log(onlyTheYears())

onlyInLastMillennium()
console.log(onlyInLastMillennium())

sumAllTheYears()
console.log(sumAllTheYears()) 

searchByTitle("Avengers: Endgame")
console.log(searchByTitle("Avengers: Endgame"))
searchByTitle("Lord of the Flies")
console.log(searchByTitle("Lord of the Flies")) 

searchAndDivide("string")
console.log(searchAndDivide("Lord")) 
console.log(searchAndDivide("Avengers")) 

console.log(movies)
removeIndex(5) 
console.log(removeIndex(5));


/* -------------------------------- */
isItPrime(7)
console.log(isItPrime(7))
isItPrime(9)
console.log(isItPrime(9))