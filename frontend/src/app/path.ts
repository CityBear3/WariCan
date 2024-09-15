export const groupPath = (id: string) => `/group/${id}`;
export const connectionPath = (userId: string, keywords?: string[]) => {
  const searchParam = keywords
    ?.map((keyword) => `keyword=${encodeURIComponent(keyword)}`)
    .join("&");
  return `/connection/${userId}?${searchParam}`;
};
