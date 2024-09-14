import { UserModel } from "./user";

export type SplitBillingModel = {
  id: string;
  name: string;
  amount: number;
  advancePayer: UserModel;
  members: UserModel[];
  type: "EQUAL_SPLIT";
  status: "ACTIVE" | "CLOSED";
};
