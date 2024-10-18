const { title } = require("process");

const complexObj = {
    gym: {
        name: "Absolute Fitness Club",
        location: "New York",
        established: 2020,
        services: [
            { name: "Personal Training", duration: "1 hour" },
            { name: "Yoga Classes", duration: "1.5 hours" },
        ],
    },
    trainers: [
        { name: "John Doe", specialization: "Strength Training" },
        { name: "Jane Smith", specialization: "Yoga" },
    ],
};
function printProperties(object) {
    const properties = Object.keys(object);
    let index = 0;

    const interval = setInterval(() => {
        if (index < properties.length) {
            const key = properties[index];
            const value = object[key];
            if (typeof value === 'object' && value !== null) {
                // If it's an array, print each element
                if (Array.isArray(value)) {
                    console.log(`${key}: [`);
                    value.forEach(item => {
                        console.log(`  ${JSON.stringify(item)},`);
                    });
                    console.log(`]`);
                } else {
                    console.log(`${key}: {`);
                    printProperties(value);
                    console.log(`}`);
                }
            } else {
                console.log(`${key}: ${value}`);
            }

            index++;
        } else {
            clearInterval(interval);
        }
    }, 3000); 
}

printProperties(complexObj);

const book = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genres: ["Dystopian", "Political Fiction"],
    displayInfo: function() {
        console.log(`${this.title} by ${this.author}, published in ${this.year}`);
    },
};

console.log(book.title);
book.year = 1950
console.log(book.year);
book.publisher = "Kishan & Tanisq"
console.log("Publisher", book.publisher);

book.displayInfo()
