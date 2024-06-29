import Page from "./Page";
import BackToTop from "../BackToTop/BackToTop";
import React from "react";
import './GoToPage.css'

const pagesData = [
    {
        imageUrl: "./ArtistsImages/Artist1.jpg",
        videoUrl: " ",
        infoUrl: ["./videos/Artista1/video1.mp4", "./videos/Artista1/video.mp4"]
    },
    {
        imageUrl: "./ArtistsImages/Artist1.jpg",
        videoUrl: " ",
        infoUrl: ["./videos/Artista2/video1.mp4", "./videos/Artista1/video.mp4"]
    },
    {
        imageUrl: "./ArtistsImages/Artist1.jpg",
        videoUrl: " ",
        infoUrl: ["./videos/Artista3/video1.mp4", "./videos/Artista1/video.mp4"]
    },
    {
        imageUrl: "./ArtistsImages/Artist1.jpg",
        videoUrl: " ",
        infoUrl: ["./videos/Artista3/video1.mp4", "./videos/Artista1/video.mp4"]
    },
    {
        imageUrl: "./ArtistsImages/Artist1.jpg",
        videoUrl: " ",
        infoUrl: ["./videos/Artista3/video1.mp4", "./videos/Artista1/video.mp4"]
    },
    {
        imageUrl: "./ArtistsImages/Artist1.jpg",
        videoUrl: " ",
        infoUrl: ["./videos/Artista3/video1.mp4", "./videos/Artista1/video.mp4"]
    },
];

const GoToPage = () => {

    return (
        <div className="gotopage_container">
            <div className="gotopage">
                {pagesData.map((page, index) => (
                    <Page key={index} imageUrl={page.imageUrl} videoUrl={page.videoUrl} infoUrl={page.infoUrl}/>
                ))}
            </div>
            <div className="BackToTop"><BackToTop/></div>
        </div>
    );
};

export default GoToPage;