export async function fetchData({
    url,
    resolveFn,
    rejectFn,
}) {
        const response = await fetch(url);
        const data = await response.json();
        console.log(`Called ${url} and received ${JSON.stringify(data)}.`);
        resolveFn(data);
}