import React from 'react'
import '../components-css/cards.css'

function Cards({ data }) {
    console.log(data);

    return (
        <div className='cards-container'>
            {data.map((item, index) => {
                return (
                    <div key={index} className='card'>
                        <img src="" alt="" />
                        <div className='content'>
                            <a href="">{item.title}</a>
                            <p>{item.description}</p>
                            <button>Read more</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards