import { TextField } from "@/components/input/TextField";
import { NormalCard } from "@/components/layout/NormalCard";
import { UserImageList } from "@/components/user/UserImageList";
import { Box, HStack } from "@chakra-ui/react";

export const GroupForm: React.FC = () => (
  <NormalCard marginTop="20px" padding="10px">
    <Box>
      <TextField
        placeholder="グループ名を入力します"
        fontSize="16px"
        type="text"
        name="groupName"
        options={{
          required: "This is required",
          minLength: { value: 1, message: "Minimum length should be 1" },
        }}
      />
    </Box>
    <Box marginTop="10px">
      <TextField
        placeholder="説明を入力します"
        fontSize="16px"
        name="groupDescription"
        options={{
          required: "This is required",
          minLength: { value: 1, message: "Minimum length should be 1" },
        }}
      />
    </Box>
    <HStack width="100%" justifyContent="end" marginTop="10px">
      <UserImageList users={[]} />
    </HStack>
  </NormalCard>
);
