import React from 'react';
import '../components-css/cards.css';

function Cards({ data }) {
    return (
        <div className="cards-container">
            {data.map((item, index) => (
                <div key={index} className="card">
                    {item.urlToImage && <img src={item.urlToImage} alt="news" />}
                    <div className="content">
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-title"
                        >
                            {item.title}
                        </a>
                        {item.description && <p>{item.description}</p>}
                        <button onClick={() => window.open(item.url, '_blank')}>Read more</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;
