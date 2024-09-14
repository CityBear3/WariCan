import { NormalCard } from "@/components/layout/NormalCard";
import { UserList } from "@/components/user/UserList";
import { GroupModel } from "@/domain/group";
import { Box, HStack, Text } from "@chakra-ui/react";

type Props = {
  group: GroupModel;
};

export const GroupCard: React.FC<Props> = ({ group }) => (
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
      <UserList users={group.members} />
    </HStack>
  </NormalCard>
);
