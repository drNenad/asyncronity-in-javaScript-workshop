function api_1 () {
    return new Promise(resolve => setTimeout(() => resolve("api 1"), 3000))
}

function api_2 () {
    return new Promise(resolve => setTimeout(() => resolve("api 2"), 3000))
}

function api_3 () {
    return new Promise(resolve => setTimeout(() => resolve("api 3"), 3000))
}

// function init() {
//     api_1()
//         .then(result_1 => {
//             console.log(result_1);
//             api_2()
//                 .then(result_2 => {
//                     console.log(result_2);
//                     api_3()
//                         .then(result_3 => {
//                             console.log(result_3);
//                         })
//                 })
//         })
//         .catch(error => console.log(error))
//         .finally(() => console.log("RENDER APP"));
// }

// init();
//
// function init() {
//     api_1()
//         .then(result_1 => {
//             console.log(result_1);
//             return api_2();
//         })
//         .then(result_2 => {
//             console.log(result_2);
//             return api_3();
//         })
//         .then(result_3 => {
//             console.log(result_3);
//         })
//         .catch(error => console.log(error))
//         .finally(() => console.log("RENDER APP"));
// }

// async function init() {
//     return Promise.resolve(undefined);
// }


//
// async function init() {
//     try {
//         const first = await api_1();
//         console.log(first);
//         const second = await api_2();
//         console.log(second);
//         const third = await api_3();
//         console.log(third)
//     } catch (error) {
//         console.warn(error);
//     } finally {
//         console.log("RENDER APP");
//     }
// }

// init();

async function init() {
    try {
        const first_api = api_1();
        const second_api = api_2();
        const third_api = api_3();

        const first_api_result = await first_api;
        console.log(first_api_result);
        const second_api_result = await second_api;
        console.log(second_api_result);
        const third_api_result = await third_api;
        console.log(third_api_result)
    } catch (error) {
        console.warn(error);
    } finally {
        console.log("RENDER APP");
    }
}
//
init();
