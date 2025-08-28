import axiosInstance from "../../utils/axios";

// export const getRelatedVideos = async ({ tags, id }) => {
//   const limit = 5;
//   let queryString =
//     tags.length > 0
//       ? tags.map((tag) => `tags_like=${tag}`).join("&") +
//         `&id_ne=${id}&_limit=${limit}`
//       : `id_ne=${id}&_limit=${limit}`;
//   const response = await axiosInstance.get(`/videos?${queryString}`);
//   return response.data;
// };

export const getRelatedVideos = async ({ tags, id }) => {
  const limit = 5;
  const response = await axiosInstance.get(
    `/videos?id_ne=${id}&_limit=${limit}`
  );
  const videos = response.data;

  const filtered = videos.filter((video) =>
    video.tags.some((tag) => tags.includes(tag))
  );

  return filtered.slice(0, 5);
};
