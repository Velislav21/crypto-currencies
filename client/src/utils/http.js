async function request(method, url) {

    const options = {
        headers: {
            accept: 'application/json',
            'x-cg-demo-api-key': `${import.meta.env.VITE_APP_API_KEY}`
        }
    }

    if (method !== 'GET') {
        options.method = method
    }

    const response = await fetch(url, options);
    console.log(url, options)
    if (!response.ok) {
        const result = await response.json();
        console.log(result)
        throw new Error("Fetch failed")
    }
    const result = await response.json();
    return result
};

export default {
    get: request.bind(null, "GET"),
    post: request.bind(null, "POST"),
    delete: request.bind(null, "DELETE"),
}