import { NormalCard } from "@/components/layout/NormalCard";
import { UserImageList } from "@/components/user/UserImageList";
import { GroupModel } from "@/domain/group";
import { UserModel } from "@/domain/user";
import { Box, HStack, Text } from "@chakra-ui/react";

type Props = {
  group: GroupModel;
  members: UserModel[];
};

export const GroupCard: React.FC<Props> = ({ group, members }) => (
  <NormalCard marginTop="20px" padding="10px">
    <Box>
      <Text fontSize="20px" fontWeight="bold">
        {group.name}
      </Text>
    </Box>
    <Box marginTop="10px">
      <Text>{group.description}</Text>
    </Box>
    <HStack width="100%" justifyContent="end" marginTop="10px">
      <UserImageList users={members} />
    </HStack>
  </NormalCard>
);
