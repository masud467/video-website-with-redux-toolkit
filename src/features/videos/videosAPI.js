// import axiosInstance from "../../utils/axios";

// export const getVideos = async (tags, search) => {
//   let queryString = "";
//   if (tags?.length > 0) {
//     queryString += tags?.map((tag) => `tags_like=${tag}`).join("&");
//   }

//   if (search !== "") {
//     queryString += `&q=${search}`;
//   }
//   const response = await axiosInstance.get(`/videos?${queryString}`);
//   return response.data;
// };

import axiosInstance from "../../utils/axios";

export const getVideos = async (tags, search) => {
  // 1️⃣ Fetch all videos from server
  const response = await axiosInstance.get("/videos");
  let videos = response.data;

  // 2️⃣ Filter videos based on selected tags or search
  if (tags.length > 0 || search) {
    videos = videos.filter((video) => {
      // Tag filter (OR logic)
      const tagMatch =
        tags.length > 0 && video.tags.some((tag) => tags.includes(tag));

      // Search filter (check title, description, or tags)
      const searchMatch =
        search &&
        (video.title.toLowerCase().includes(search.toLowerCase()) ||
          video.description.toLowerCase().includes(search.toLowerCase()) ||
          video.tags.some((tag) =>
            tag.toLowerCase().includes(search.toLowerCase())
          ));

      return tagMatch || searchMatch; // OR logic
    });
  }

  return videos;
};
