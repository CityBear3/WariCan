import { UserModel } from "./user";

export type SplitBillingModel = {
  id: string;
  name: string;
  groupId: string;
  amount: number;
  members: UserModel[];
  advancePayer: UserModel;
  type: "EQUAL_SPLIT";
  status: "ACTIVE" | "CLOSED";
};
