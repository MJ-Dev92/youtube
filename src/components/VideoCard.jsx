import React from "react";

export default function VideoCard({ video }) {
  const SP = video.snippet;
  const UploadYear =
    new Date().getFullYear() - new Date(SP.publishedAt).getFullYear();
  const UploadMonth =
    new Date().getMonth() - new Date(SP.publishedAt).getMonth();
  const UploadDay = new Date().getDay() - new Date(SP.publishedAt).getDay();
  const today = () => {
    if (UploadYear > 0) {
      return `${UploadYear} year ago`;
    } else if (UploadMonth > 0) {
      return `${UploadMonth} month ago`;
    } else {
      return `${UploadDay} day ago`;
    }
  };
  return (
    <div className="inline-flex mr-2">
      <div className="w-[250px] h-[150]">
        <img
          className="w-[250px] h-[200]"
          src={SP.thumbnails.default.url}
          alt="Thumbnails"
        />
        <div className="">{SP.title}</div>
        <div className="">{SP.channelTitle}</div>
        <div className="">{today()}</div>
      </div>
    </div>
  );
}
