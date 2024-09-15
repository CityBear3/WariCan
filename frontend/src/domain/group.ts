import { SplitBillingModel } from "./splitBilling";
import { UserModel } from "./user";

export type GroupModel = {
  id: string;
  name: string;
  description: string;
  members: UserModel[];
  splitBillings: SplitBillingModel[];
};
