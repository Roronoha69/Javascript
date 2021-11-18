console.log("hello world");

// exo 2

/*
var chiffre = window.prompt("entre un chiffre : ");

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }

  console.log(factorialize(chiffre));
  var facteur = factorialize(chiffre)
  alert("le factoriel de : " + chiffre + " est " + facteur );

*/

  //exo 3

  let n = window.prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
  
  function pyramide(n) {
  for (let i = 0; i <=(n*2); i++) {
    n--;
    let space = " ";
    let str = "#";
    console.log(space.repeat(n) + str.repeat(i));
    
    
    // Ceci sera exécuté 5 fois
    // À chaque éxécution, la variable "pas" augmentera de 1
    // Lorsque'elle sera arrivée à 5, le boucle se terminera.
  }
  }
 
pyramide(n);

  



 


 
 