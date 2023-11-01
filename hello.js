const fs = require('fs');

fs.writeFileSync("welcome.txt", "Hello Node", (err, data) => {
    if (err) {
        console.log("Try again!");
    } else {
        console.log("Successful")
    }
});