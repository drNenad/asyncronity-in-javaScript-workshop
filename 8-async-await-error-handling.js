function api () {
    return new Promise(resolve => setTimeout(() => resolve("api 1"), 3000))
}

// async function fetchApi () {
//     try {
//         const data = await api();
//
//         return data;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }

// Component.vue
// try {
//     fetchApi();
// } catch (error) {
//     toastr.error(error);
// }
//
// fetchApi().catch(()= >)







// type ApiHandler = [data: AxiosResponse | null, error: Error | null];


async function fetchApi () {
    try {
        const data = await api();

        return [data, null];
    } catch (error) {
        return [null, error];
    }
}

// Component.vue

const [data, error] = fetchApi();

if (error) {
    toastr.error(error);
}

// do some data