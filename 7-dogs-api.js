function dogApi() {
    return fetch("https://dog.ceo/api/breeds/image/random");
}

// async function init() {
//     try {
//         const first = await dogApi();
//         console.log(first.status);
//         const second = await dogApi();
//         console.log(second.status);
//         const third = await dogApi();
//         console.log(third.status)
//     } catch (error) {
//         console.warn(error);
//     } finally {
//         console.log("RENDER APP");
//     }
// }

async function init() {
    try {
        const first_api = dogApi();
        const second_api = dogApi();
        const third_api = dogApi();

        const first_api_result = await first_api;
        console.log("first: ", first_api_result.status);
        const second_api_result = await second_api;
        console.log("second: ", second_api_result.status);
        const third_api_result = await third_api;
        console.log("third: ", third_api_result.status)
    } catch (error) {
        console.warn(error);
    } finally {
        console.log("RENDER APP");
    }
}

init();
