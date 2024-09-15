export const groupPath = (id: string) => `/group/${id}`;
export const groupCreatePath = (members?: string[]) => {
  const searchParam = members
    ?.map((member) => `member=${encodeURIComponent(member)}`)
    .join("&");
  return `/group/new?${searchParam}`;
};

type ConnectionOptions = { keywords?: string[]; members?: string[] };

export const connectionPath = (options?: ConnectionOptions) => {
  const searchParam = [
    ...(options?.keywords?.map(
      (keyword) => `keyword=${encodeURIComponent(keyword)}`
    ) ?? []),
    ...(options?.members?.map(
      (member) => `member=${encodeURIComponent(member)}`
    ) ?? []),
  ].join("&");
  return `/connection/?${searchParam}`;
};

export const connectionSliderPath = (
  userId: string,
  options?: ConnectionOptions
) => {
  const searchParam = [
    ...(options?.keywords?.map(
      (keyword) => `keyword=${encodeURIComponent(keyword)}`
    ) ?? []),
    ...(options?.members?.map(
      (member) => `member=${encodeURIComponent(member)}`
    ) ?? []),
  ].join("&");
  return `/connection/${userId}?${searchParam}`;
};
