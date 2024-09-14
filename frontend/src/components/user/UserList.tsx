import { UserModel } from "@/domain/user";
import { List, ListItem } from "@chakra-ui/react";
import { User } from "./User";

type Props = {
  users: UserModel[];
};

export const UserList: React.FC<Props> = ({ users }) => (
  <List>
    {users.map((member) => (
      <ListItem key={member.id} margin="20px 0px">
        <User user={member} />
      </ListItem>
    ))}
  </List>
);
