//const baseUrl = window.location.origin;
const baseUrl='http://127.0.0.1:8000'

// Function to fetch and log data from a given endpoint
async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Endpoints
const endpoints = {
    linecategories: `${baseUrl}/linecategories/`,
    categoryitems: `${baseUrl}/categoryitems/`,
    // paragraphsections: `${baseUrl}/paragraphsections/`,
    // furtherinfo: `${baseUrl}/furtherinfo/`,
    // boldpoints: `${baseUrl}/boldpoints/`,
    // tags: `${baseUrl}/tags/`,
    bullets: `${baseUrl}/bullets/`,
    resources: `${baseUrl}/resources/`,
    subscribers: `${baseUrl}/subscribers/`,
    threads: `${baseUrl}/threads/`,
    sociallinks: `${baseUrl}/sociallinks/`
};

export { fetchData, endpoints };