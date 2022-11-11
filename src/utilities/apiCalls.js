// const url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=process.env.REACT_APP_NYT_KEY`

const getArticles = async (tag) => {
    try {
        const response = await fetch(
            `https://api.nytimes.com/svc/topstories/v2/${tag}.json?api-key=unC8DJvBitfNbQZ6sygQv7bFd2Wxf9xg`
            // `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.REACT_APP_NYT_KEY}`
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
// `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=process.env.REACT_APP_NYT_KEY`

//other categories that will need to be joined - spaces removed:
   // {
    //     "category": "N.Y.",
    //     "id": "04"
    // },
        // {
    //     "category": "T Magazine",
    //     "id": "17"
    // },
        // {
    //     "category": "Real Estate",
    //     "id": "19"
    // }