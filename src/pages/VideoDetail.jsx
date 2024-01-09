import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function VideoDetail({ title }) {
  const keyword = useParams();
  const { youtube } = useYoutubeApi();

  console.log(title);
  return <div>VideoDetail</div>;
}
