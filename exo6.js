
/*

CCGUCGUUGCGCUACAGC
CCUCGCCGGUACUUCUCG

UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
CCU ou CCC ou CCA ou CCG => Proline
UUA ou UUG => Leucine
UUU ou UUC => Phénylalanine
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
UAU ou UAC => Tyrosine

*/
const arn1 = "CCG-UCG-UUG-CGC-UAC-AGC"
const arn2 ="CCU-CGC-CGG-UAC-UUC-UCG"


let proteine = []

    arnSplit = arn1.split('-')
    arn2Split = arn2.split('-')
    function remplace(arr) {
        
  
    arr.forEach(elemntOf3 => { 
        switch (elemntOf3) {
            case "UCU":
            case "UCC":
            case "UCA":
            case "UCG":
            case "AGU":
            case "AGC":
                proteine.push("Sérine");
                break;
            case "CCU":
            case "CCC":
            case "CCA":
            case "CCG":
                proteine.push("Proline");
                break;
            case "UUA":
            case "UUG":
                proteine.push("Leucine");
                break;
            case "UUU":                                
            case "UUC":
                proteine.push("Phénylalanine");
                break;
            case "CGU":
            case "CGC":
            case "CGA":
            case "CGG":             
            case "AGA":
            case "AGG":
                proteine.push("Arginine");
                break;

            case "UAU":
            case "UAC":
                proteine.push("Tyrosine");            
                break;
        
            default:
                break;
        }
   } 
  )
  }
remplace(arnSplit)
console.log(proteine)


//remplace(arn2Split)
//console.log(proteine)

