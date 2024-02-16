import React from "react";

type NewsItemProps = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  description,
  url,
  urlToImage,
}) => {
  return (
<div className="w-96 border border-gray-500 rounded-lg overflow-hidden mb-8 ml-8">
  <div className="h-80 overflow-hidden">
    <img
      src={urlToImage}
      alt="photo"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-4 h-40 overflow-y-auto">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="whitespace-normal text-sm w-96" >{description}</p>
  </div>
  <div className="p-4 text-right">
    <a
      href={url}
      className="block py-2 px-4 rounded text-sm transition duration-300 focus:outline-none"
      style={{ height: "2.5rem" }}
    >
      <span className="text-blue-700 hover:text-gray-900">Read more</span>
    </a>
  </div>
</div>
  );
};

export default NewsItem;
