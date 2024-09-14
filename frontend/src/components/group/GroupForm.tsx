import { TextField } from "@/components/input/TextField";
import { NormalCard } from "@/components/layout/NormalCard";
import { UserImageList } from "@/components/user/UserImageList";
import { Box, HStack } from "@chakra-ui/react";

export const GroupForm: React.FC = () => (
  <NormalCard marginTop="20px" padding="10px">
    <Box>
      <TextField placeholder="グループ名を入力します" fontSize="20px" />
    </Box>
    <Box marginTop="10px">
      <TextField placeholder="説明を入力します" />
    </Box>
    <HStack width="100%" justifyContent="end" marginTop="10px">
      <UserImageList users={[]} />
    </HStack>
  </NormalCard>
);
