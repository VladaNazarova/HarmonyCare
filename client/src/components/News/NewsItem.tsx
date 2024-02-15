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
<div className="w-80 border border-black rounded-lg overflow-hidden">
  <div className="h-80 overflow-hidden">
    <img src={urlToImage} alt="photo" className="w-full h-full object-cover" />
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold truncate" style={{ maxHeight: "6rem" }}>{title}</h3>
    <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm" style={{ maxHeight: "4rem" }}>{description}</p>
  </div>
  <div className="p-4 text-right">
    <a href={url} className="block py-2 px-4 rounded text-sm transition duration-300 focus:outline-none" style={{ height: "2.5rem" }}>
      <span className="text-gray-700 hover:text-gray-900">Read more</span>
    </a>
  </div>
</div>

  );
};

export default NewsItem;
