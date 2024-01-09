import React from "react";
import { formatAgo } from "../util/date";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li className="lg:overflow-hidden lg:w-[300px] lg:h-auto mb-2">
      <Link to={`videos/watch/:${video.id}`}>
        <img
          className="w-full lg:hover:scale-110 transition-transform ease-in-out duration-300"
          src={thumbnails.medium.url}
          alt="title"
        />
        <div>
          <p className="font-semibold my-2 line-clamp-2">{title}</p>
          <p className="text-sm opacity-80">{channelTitle}</p>
          <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
        </div>
      </Link>
    </li>
  );
}
