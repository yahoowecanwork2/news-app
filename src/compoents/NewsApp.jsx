import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import '../components-css/navbar.css'
import '../components-css/NewsApp.css'

function NewsApp() {
    const [headline, setHeadline] = useState("Breaking News");
    const [articles, setArticles] = useState([]);

    const [search, setSearch] = useState("india");
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    console.log("API KEY:", apiKey);


    const fetchHeadline = async () => {
        try {
            const url = (`https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`)
            const response = await fetch(url);
            const data = await response.json();
            if (data.articles && data.articles.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.articles.length);
                setHeadline(data.articles[randomIndex].title);
                setArticles(data.articles);
            }
        } catch (error) {
            console.error("Error fetching headline:", error);
            setHeadline("Error fetching massage");
            setArticles([]);
        }
    };

    useEffect(() => {
        fetchHeadline();
        // const interval = setInterval(fetchHeadline, 10000);
        // return () => clearInterval(interval);
    }, [search])

    const handleInput = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>
                <ul>
                    <li><Link to="/">All News</Link></li>
                    <li><Link to="/cards">Trending</Link></li>
                </ul>
                <div className='search-bar'>
                    <input type="text"
                        value={search}
                        onChange={handleInput} placeholder='Search News' />
                    <button onClick={fetchHeadline}>Search</button>
                </div>
            </nav>
            <div className='head'>
                <p> Breaking News ||{headline}</p>
            </div>

            <div className='categorybtn'>
                <button>Sports</button>
                <button>Politics</button>
                <button>Health</button>
                <button>Entertainment</button>
                <button>Fitness</button>
            </div>



            <div>
                <Cards data={articles} />

            </div>
        </div>
    );
}

export default NewsApp;
