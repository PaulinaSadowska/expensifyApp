const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("hi!")
        resolve("this is result data");
    }, 1500)
});

console.log("before");

promise.then((data) => {
    console.log(data);
}).catch((message) => {
    console.log("error: ", message)
})

console.log("after");