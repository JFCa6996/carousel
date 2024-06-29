import React from 'react';

const Page = ({imageUrl, videoUrl, infoUrl}) => {
    //<a href={videoUrl}>Videos</a>
    //             <a href={infoUrl}>Información</a>
    return (
        <div className="page">
            <img className='imagen' src={imageUrl} alt="Imagen del artista"/>
        </div>
    );
};

export default Page;
