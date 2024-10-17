import { useEffect, useState } from "react"
import NewItem from "./NewItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
            let response = await fetch(url);
            if (response.ok) {
                let output = await response.json();
                setArticles(output.articles);
            }
        }
        fetchData();
    }, [category]);
    return (
        <div>
            <h2 className="text-center" >Latest <span className="badge bg-danger">News</span></h2>
            <div className="row">
                {
                    articles.map((news, index) => {
                        return <NewItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                    })
                }
            </div>
        </div>
    )
}

export default NewsBoard
