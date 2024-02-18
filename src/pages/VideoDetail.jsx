import React from "react";
import { useLocation } from "react-router-dom";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  console.log(video);
  return <div>VideoDetail</div>;
}
