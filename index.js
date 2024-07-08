const messages ={
    greetings: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
    fortunes: ['You are lucky today', 'You are gonna be fine', 'You happiness is your priority', 'Never let your guard down', 'Keep thinking big'],
};

const greetMessage = (message, num) =>{
    let arrayMessage = messages.greetings[Math.floor(Math.random() * messages.greetings.length)];
    let arrayLuck = messages.fortunes[Math.floor(Math.random() * messages.fortunes.length)];
    let degree = Math.floor(Math.random() * 30);
    return `${arrayMessage}. \n${arrayLuck}. \nNow the degree is ${degree} degree Celsius`;
}

console.log(greetMessage(messages));