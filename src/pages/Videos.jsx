import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import FakeYoutube from "../api/fakeYoutubeClient";
import Youtube, { search, youtubeAPISearch } from "../api/youtube";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => youtube.search(keyword),
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
// export default function Videos() {
//   const { keyword } = useParams();
//   const {
//     isLoading,
//     error,
//     data: videos,
//   } = useQuery({
//     queryKey: ["videos", keyword],
//     queryFn: () => youtubeAPISearch(),
//   });

//   return (
//     <>
//       <div>Videos {keyword ? `🔎${keyword}` : `🔥`}</div>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>something is wrong😢 </p>}
//       {videos && (
//         <ul>
//           {videos.map((video) => (
//             <VideoCard key={video.id} video={video} />
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }
