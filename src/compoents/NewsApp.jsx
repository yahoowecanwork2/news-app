import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Navbar from './Navbar';
import '../components-css/NewsApp.css';

function NewsApp() {
    const [headline, setHeadline] = useState("Breaking News");
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState("India");

    const apiKey = import.meta.env.VITE_NEWS_API_KEY;

    const fetchHeadline = async () => {
        try {
            const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            if (data.articles && data.articles.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.articles.length);
                setHeadline(data.articles[randomIndex].title);
                setArticles(data.articles);
            }
        } catch (error) {
            console.error("Error fetching headline:", error);
            setHeadline("Error fetching news");
            setArticles([]);
        }
    };

    useEffect(() => {
        fetchHeadline();
    }, []);
    useEffect(() => {
        if (search) {
            fetchHeadline();
        }
    }, [search]);


    return (
        <div>
            <Navbar search={search} setSearch={setSearch} fetchHeadline={fetchHeadline} />
            <div className="head">
                <p>Breaking News || {headline}</p>
            </div>

            <div className="categorybtn">
                <button onClick={() => setSearchAndFetch("sports")}>Sports</button>
                <button onClick={() => setSearchAndFetch("politics")}>Politics</button>
                <button onClick={() => setSearchAndFetch("health")}>Health</button>
                <button onClick={() => setSearchAndFetch("entertainment")}>Entertainment</button>
                <button onClick={() => setSearchAndFetch("fitness")}>Fitness</button>
            </div>

            <Cards data={articles} />
        </div>
    );

    function setSearchAndFetch(category) {
        setSearch(category);
        fetchHeadline(category);
    }
}

export default NewsApp;
