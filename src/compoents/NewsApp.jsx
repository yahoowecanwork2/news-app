import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import '../components-css/navbar.css'
import '../components-css/NewsApp.css'

function NewsApp() {
    const [headline, setHeadline] = useState("Breaking News");
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    console.log("API KEY:", apiKey);

    useEffect(() => {
        const fetchHeadline = async () => {
            try {
                const response = await fetch(
                    `https://newsapi.org/v2/everything?q=india&pageSize=10&apiKey=${apiKey}`
                );
                const data = await response.json();
                if (data.articles && data.articles.length > 0) {
                    setHeadline(data.articles[0].title);
                }
            } catch (error) {
                console.error("Error fetching headline:", error);
            }
        };

        fetchHeadline();
        // Call every 10 seconds
        const interval = setInterval(fetchHeadline, 10000);
        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, [apiKey]);

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
                    <input type="text" placeholder='Search News' />
                    <button>Search</button>
                </div>
            </nav>
            <div className='head'>
                <p> Breaking News:{headline}</p>
            </div>

            <div className='categorybtn'>
                <button>Sports</button>
                <button>Politics</button>
                <button>Health</button>
                <button>Entertainment</button>
                <button>Fitness</button>
            </div>



            <div>
                <Cards />
            </div>
        </div>
    );
}

export default NewsApp;
