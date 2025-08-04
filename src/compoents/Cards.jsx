import React from 'react'
import '../components-css/cards.css'

function Cards({ data }) {
    console.log(data);
    const readmore = (url) => {
        window.open(url)
    }

    return (
        <div className='cards-container'>
            {data.map((item, index) => {
                return (
                    <div key={index} className='card'>
                        <img src={item.urlToImage} alt="" />
                        <div className='content'>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" onClick={() => window.open(item.url)}>{item.title}</a>

                            <p>{item.description}</p>
                            <button onClick={() => window.open(item.url)}>Read more</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards