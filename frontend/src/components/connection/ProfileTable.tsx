import { UserModel } from "@/domain/user";
import { Grid, GridItem } from "@chakra-ui/react";
import { ProfileTile } from "../user/ProfileTile";
import { ComponentProps } from "react";

type Props = {
  users: UserModel[];
  onProfileClick?: (userId: string) => void;
} & ComponentProps<typeof Grid>;

export const ProfileTable: React.FC<Props> = ({
  users,
  onProfileClick,
  ...props
}) => (
  <Grid templateColumns="repeat(2, 1fr)" gap={6} {...props}>
    {users.map((user) => (
      <GridItem
        key={user.id}
        margin="auto"
        onClick={() => onProfileClick && onProfileClick(user.id)}
      >
        <ProfileTile user={user} />
      </GridItem>
    ))}
  </Grid>
);
