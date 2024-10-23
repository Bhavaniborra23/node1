
const fs = require('fs');
fs.readFile('number.txt', 'utf8', (err, data) => {
    if (err) 
    {
       console.error('Error reading the file:', err);
       return;
    }

  
    let number = parseInt(data);
    let sum = 0;

   
    while (number > 0) 
    {
        sum += number % 10; 
        number = Math.sqrt(number / 10);  
    }

    console.log(`Sum of digits: ${sum}`);
    console.log(`Sum of digits: ${sum}`);
});
