export type SplitBillingModel = {
    id: string;
    name: string;
    groupId: string;
    amount: number;
    advancePayerId: string;
    type: "EQUAL_SPLIT";
    status: "ACTIVE" | "CLOSED";
};
