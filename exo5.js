const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 0 }
  ];



/* ca marche pas 
  function emprunt(livre) {
    for ( var i=0; i < livre.length; i++){ 
      if (livre.rented > 0) {
          return true
      } else {
          return false
      }
  }
}

  console.log(books(emprunt));


  let allrented = true; 
  
books.forEach((x) => {
    if (x.rented == 0) {
        console.log(x);
        allrented = false
    }
});

allrented == false ? console.log("un livre n'a pas été emprunter") : console.log("tous les livre ont été emprunté");



min = books.sort((a, b) => parseFloat(a.rented) - parseFloat(b.rented));
console.log(min[0]);



books.forEach((x) => {
    if (x.id == 873495) {
        console.log(x);
    }
});


*/

console.log(books.filter(item => !(item.id == 133712))) ;

let booksSans133712 = books.filter(item => !(item.id == 133712))


console.log(booksSans133712.sort(function(a,b){ 
    if (a.title < b.title) {return -1}
    if (a.title > b.title) {return 1}
    return 0 } )  );