import React from 'react';
function Gallery(props) {
    return (
      <div className="container margin-top-30 margin-bottom-30">
        <h1>Featured arts</h1>
        <div className='list flex gap-15'>
          {props.list.map(art => (
            <div className="art" key={art.id}>
              <div className="image-container">
                <img src={art.url} alt={art.name} className="image" />
              </div>
              <div className="info">
                <p className="artname">{art.artname}</p>
                <p className="description">{art.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Gallery;