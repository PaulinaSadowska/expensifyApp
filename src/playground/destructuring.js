console.log("destruct");

const person = {
    name: "Paulina",
    age: 27,
    location: {
        city: "Poznan",
        temp: 5
    }
};

const { name: firstName = "Anonymous", age } = person;

const { temp: temperature, city } = person.location;

console.log(`${firstName} is ${age}`)

console.log(`It's ${temperature} in ${city}`)


const book = {
    a: "aa",
    publisher: {
        name: "hello"
    }
}

const { name: publisherName = "unknown" } = book.publisher

console.log(publisherName)




const address = ['streetname1', 'CityName', "Miami", "69234"];

const [, city2, state = "New York"] = address;
console.log(`hi from ${city2} in ${state}`)

const item = ['coffee (hot)', "$2", "$2.5", "$3"]
const [itemType, , mediumPrice] = item
console.log(`${itemType} costs ${mediumPrice} (medium)`);
