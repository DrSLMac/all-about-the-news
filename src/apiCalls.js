const apiKey = process.env.REACT_APP_API_KEY
const nytURL = process.env.REACT_APP_NYT_URL

// REACT_APP_NYT_URL = https://api.nytimes.com/svc/topstories/v2/
// REACT_APP_API_KEY = unC8DJvBitfNbQZ6sygQv7bFd2Wxf9xg

// const apiKey = "unC8DJvBitfNbQZ6sygQv7bFd2Wxf9xg"
// const nytURL = "https://api.nytimes.com/svc/topstories/v2/"
// const https://api.nytimes.com/svc/topstories/v2/home.json?api-key=unC8DJvBitfNbQZ6sygQv7bFd2Wxf9xg

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
