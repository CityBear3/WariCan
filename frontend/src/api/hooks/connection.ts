import { UserModel } from "@/domain/user";
import { QueryHook } from "./common";

export const useConnectedUsers: QueryHook<
  never,
  { users: UserModel[] }
> = () => {
  const users: UserModel[] = [
    {
      id: "cf290bee-9eb4-4e28-bea9-c8c3b37cb621",
      name: "三島 智昭",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
    {
      id: "45E144DC-15A3-4F9F-8A6C-FD3F27B297B1",
      name: "大河 照之",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
    {
      id: "02E7AA00-3057-462A-98F6-0B076638BC25",
      name: "小島 健太郎",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
    {
      id: "BD7C8D8F-A56F-4F02-824F-665720FF098D",
      name: "細川 由美",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
    {
      id: "7BE1FE4A-03BE-4A7A-AEBD-8D9033576B38",
      name: "城島 美咲",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
  ];
  return { isLoading: false, isError: false, users };
};
