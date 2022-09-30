const array = [0, 1, 2, 3];

function api () {
    return new Promise(resolve => setTimeout(() => resolve("api 1"), 3000))
}

array.forEach(item => {
    console.log("for each", item);
    api().then(() => console.log(item));
})

for(const item in array) {
    console.log("for in", item);
    api().then(() => console.log(item));
}
