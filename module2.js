//My Solution for Module2 : A


var myName = 'Philile Hlalukana';
var institution = 'IT Varsity';
var gitHubUsername = 'Phix0808';

function intro() {
    console.log(`My name is ${myName}, a student from  ${institution} and my Github username is ${gitHubUsername}.`);
}


intro();


//My Solution for Module2 : B



function getRandomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
}

const array = ['Best Consumer Solution', 'Best Enterprise Solution', 'Best African Solution', 'Most Innovative Solution', 'Best Gaming Solution', 'Best Health Solution', 'Best Agricultural Solution', 'Best Agricultural Solution', 'Best Educational Solution', 'Best Financial Solution', 'Best Hackathon Solution', 'Best South African Solution', 'Best Campus Cup Solution', 'Huawei AppGallery Category 15', ];

const prediction = getRandomItem(array);

console.log(`${prediction} category will win the MTN Business App of the Year in the year 2022`);

//My Solution for Module2 : C

const { readFile } = require("fs");

readFile("winner.txt", (error, fileBuffer) => {
    if (error) {
        console.error(error.message);
        process.exit(1);
    }

    const fileContent = fileBuffer.toString();

    console.log(fileContent);
});
