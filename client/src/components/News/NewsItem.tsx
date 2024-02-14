import React from 'react';

type NewsItemProps = {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
};

const NewsItem: React.FC<NewsItemProps> = ({ title, description, url, urlToImage }) => {
    return (
        <div className="border rounded-lg p-4">
            <div className="relative">
            <img src={urlToImage} className="w-full h-48 object-cover rounded-t-lg" alt="News" />
                <div className="absolute inset-0 flex flex-col justify-end">
                    <div className="bg-black bg-opacity-50 p-4 rounded-b-lg">
                        <h3 className="text-xl font-semibold text-white">{title}</h3>
                        <p className="text-gray-300">{description}</p>
                        <a href={url} className="text-blue-500 hover:text-blue-700">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
