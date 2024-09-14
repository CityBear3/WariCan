import { UserModel } from "@/domain/user";
import { Grid, GridItem } from "@chakra-ui/react";
import { ProfileTile } from "../user/ProfileTile";
import { ComponentProps } from "react";

type Props = {
  users: UserModel[];
} & ComponentProps<typeof Grid>;

export const ProfileTable: React.FC<Props> = ({ users, ...props }) => (
  <Grid templateColumns="repeat(2, 1fr)" gap={6} {...props}>
    {users.map((user) => (
      <GridItem key={user.id} margin="auto">
        <ProfileTile user={user} />
      </GridItem>
    ))}
  </Grid>
);
