import React from 'react'
import Cards from './Cards';
import '../components-css/navbar.css'

function NewsApp() {
    return (
        <div>
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>
                <ul>
                    <a href=''>All News</a>
                    <a href="">Trending</a>
                </ul>
                <div className='search-bar'>
                    <input type="text" placeholder='Search News' />
                    <button>Search</button>
                </div>
            </nav>
            <div className='categorybtn'>
                <button>sports</button>
                <button>Politics</button>
                <button>Health</button>
                <button>Entermaint</button>
                <button>Fitness</button>
            </div>
            <div>
                <Cards />
            </div>
        </div>
    )
}

export default NewsApp;