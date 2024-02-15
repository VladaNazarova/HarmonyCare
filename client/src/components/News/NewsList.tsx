import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Article = {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
};

export default function NewsList() {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything?q=health&apiKey=e55d5afceb1d4e73af743e0e828aea83');
                console.log(response.data);
                setArticles(response.data.articles.slice(0, 15)); 
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        getArticles();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {articles.length > 0 && articles.map((article, index) => (
                <NewsItem
                    key={index}
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage}
                />
            ))}
        </Slider>
    );
}
