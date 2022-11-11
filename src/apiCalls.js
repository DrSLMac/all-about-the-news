const apiKey = process.env.REACT_APP_API_KEY
const nytURL = process.env.REACT_APP_NYT_URL

const getArticles = async (tag) => {
    try {
        const response = await fetch(
            `${nytURL}${tag}.json?api-key=${apiKey}`
        )
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(`Bummer. Looks like times are 'a changing. Please try again. ${error}`)
        return error;
    }
}

export { getArticles }

// https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey
// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey