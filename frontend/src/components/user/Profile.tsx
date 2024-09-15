import { UserModel } from "@/domain/user";
import { NormalCard } from "../layout/NormalCard";
import { Box, Card, CardBody, Image, VStack } from "@chakra-ui/react";
import { UserName } from "./UserName";
import { TagText } from "@/components/text/TagText";
import { ComponentProps } from "react";

type Props = {
  user: UserModel;
} & ComponentProps<typeof Card>;

const cardProps = {
  width: "90%",
  paddingBottom: "20px",
};

const imageProps = {
  width: "100%",
  aspectRatio: "1",
};

const tagBoxProps = {
  width: "90%",
};

export const Profile: React.FC<Props> = ({ user, ...props }) => (
  <NormalCard {...cardProps} {...props}>
    <CardBody padding="0" boxSizing="border-box" height="200px">
      <VStack>
        <Image src={user.imageUrl} {...imageProps} />
        <UserName user={user} nameSize="32px" titleSize="24px" />
        <Box {...tagBoxProps}>
          <TagText tag={user.tag} />
        </Box>
      </VStack>
    </CardBody>
  </NormalCard>
);
