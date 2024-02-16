import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=(healthcare OR medicine OR "public health" OR "medical care" OR "health issues") AND (people OR human OR person)&apiKey=e55d5afceb1d4e73af743e0e828aea83'
        );
        console.log(response.data);
        const filteredArticles = response.data.articles.filter(
          (article: Article) => {
            const lowercaseTitle = article.title.toLowerCase();
            const lowercaseDescription = article.description.toLowerCase();
            return !(
              lowercaseTitle.includes("war") ||
              lowercaseDescription.includes("war") ||
              lowercaseTitle.includes("kill") ||
              lowercaseDescription.includes("kill")
            );
          }
        );
        const articlesWithImages = filteredArticles.filter(
          (article: Article) => article.urlToImage
        );
        setArticles(articlesWithImages.slice(0, 10));
      } catch (error) {
        console.error("Error fetching articles:", error);
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
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="min-h-screen flex flex-col items-center" style={{marginTop: "200px"}}>
      <div className="w-full max-w-screen-2xl px-4">
        <Slider {...settings}>
          {articles.length > 0 &&
            articles.map((article, index) => (
              <NewsItem
                key={index}
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
}
