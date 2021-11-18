const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  
  function age(annee) {
    return annee.year > 1969 && annee.year < 1980;
  }
  
  console.log(entrepreneurs.filter(age));


  
let fullname =  entrepreneurs.map(function (fullname) { 

    delete fullname.year
    return fullname; 
});


console.log(fullname);

//Quel âge aurait chaque inventeur aujourd'hui ?
    


let ageNow =  entrepreneurs.map(function (ageNow) { 
  for (var i = 0; i < entrepreneurs.length; i++) { 
    ageNow = 2021 - ageNow.year
  return ageNow

    }
  }
);
console.log(ageNow);




function tri( a, b ) {
  if ( a.first < b.first ){
    return -1;
  }
  if ( a.first > b.first ){
    return 1;
  }
  return 0;
}
console.log(entrepreneurs.sort(tri));