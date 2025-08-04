import React from 'react'

function NewsApp() {
    return (
        <div>
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>
                <ul>
                    <a>All News</a>
                    <a href="">Trending</a>
                </ul>
                <div className='search-bar'>
                    <input type="text" placeholder='Search News' />
                    <button>Search</button>
                </div>
            </nav>
        </div>
    )
}

export default NewsApp;