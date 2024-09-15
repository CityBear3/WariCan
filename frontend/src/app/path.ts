export const groupPath = (id: string) => `/group/${id}`;
export const groupCreatePath = (members?: string[]) => {
  const searchParam = members
    ?.map((member) => `member=${encodeURIComponent(member)}`)
    .join("&");
  return `/group/new?${searchParam}`;
};

export const splitBillingCreatePath = (groupId: string) =>
  `/split-billing/new?groupId=${groupId}`;

export const splitBillingPath = (
  groupId: string,
  values: {
    description: string;
    amount: number;
  }
) => {
  const searchParam = `groupId=${groupId}&description=${values.description}&amount=${values.amount}`;
  return `/split-billing/BBC240FB-4E43-41BA-97CA-1663604AE288?${searchParam}`;
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
