const arr1 = ['Good morning', 'Good afternoon', 'Good evening', 'Good night'];
const arr2 = ['You are lucky today', 'You are gonna be fine', 'You happiness is your priority', 'Never let your guard down', 'Keep thinking big'];
const greetMessage = (arr1, arr2, num) =>{
    let arrayMessage = arr1[Math.floor(Math.random() * arr1.length)];
    let arrayLuck = arr2[Math.floor(Math.random() * arr2.length)];
    let degree = Math.floor(Math.random() * 30);
    return `${arrayMessage}. ${arrayLuck}. now the degree is ${degree} degree Celsius`;
}

console.log(greetMessage(arr1,arr2));