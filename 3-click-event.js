document.querySelector("body").addEventListener("click", () => {
    Promise.resolve().then(function microtask_1() {
        console.log("micro task 1");
    });

    console.log("hello 1");
});

document.querySelector("body").addEventListener("click", () => {
    Promise.resolve().then(function microtask_2() {
        console.log("micro task 2");
    });

    console.log("hello 2");
});

document.querySelector("body").click();
