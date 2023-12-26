import React from "react";

export default function VideoCard({ video }) {
  const SP = video.snippet;
  console.log(SP);
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
    <>
      <img src={SP.thumbnails.default.url} alt="Thumbnails" />
      <div>{SP.title}</div>
      <div>{SP.channelTitle}</div>
      <div>{today()}</div>
    </>
  );
}
