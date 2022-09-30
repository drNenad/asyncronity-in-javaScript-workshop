setTimeout(function task_1() {
    Promise.resolve().then(function microtask_1() {
        console.log("micro task 1");
    });

    console.log("hello 1");
}, 0);

setTimeout(function task_2() {
    Promise.resolve().then(function microtask_2() {
        console.log("micro task 2");
    });

    console.log("hello 2");
}, 0);

