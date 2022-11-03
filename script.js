//1)

function evenOrOdd(number) {
    return number %2==0; 
}


//2)
function rectPerimeter(a,b) {
    return (a + b) * 2 ; 
    
}  

//3)

function rectPerimeter(a,b) {
    return (a + b) * 2 ; 
   
} 

function getSquarePerimeter(a) {
   return rectPerimeter(a,a);
} 


//4)

function getRandomInt() {
    return Math.floor(math.random() * 100);
}

//5)

function getCurrencySymbolFromCode(currency) {
    switch (key) {
        case "GEL":
            return "ლ"
        case "EUR":
            return "€"
        case "USD":
            return "$"
            
            break;
    
        default:
            break;
    }
}
//6)
const array = [
    { name: "gio", age: 28 },
    { name: "akaki", age: 23 },
    { name: "nika", age: 27 },
    { name: "luka", age: 1 },
    { name: "tornike", age: 2 }
];


function getMinimumAge(arr) {
    var ages = [];
    arr.forEach(element => {
        ages.push(element.age);
    });
    var minimum = Math.min(...ages);

    return arr.filter(arr => {
        return arr.age === minimum
    })
}

