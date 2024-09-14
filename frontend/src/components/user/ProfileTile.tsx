import { UserModel } from "@/domain/user";
import { NormalCard } from "../layout/NormalCard";
import { CardBody, Image, VStack } from "@chakra-ui/react";
import { UserName } from "./UserName";

type Props = {
  user: UserModel;
  size?: number;
};

export const ProfileTile: React.FC<Props> = ({ user, size = 200 }) => {
  const cardProps = {
    width: `${size}px`,
    paddingBottom: "0.5em",
    fontSize: `${Math.floor(size / 10)}px`,
  };

  const imageProps = {
    width: "100%",
    aspectRatio: "1",
  };

  return (
    <NormalCard {...cardProps}>
      <CardBody padding="0" boxSizing="border-box" height={`${size}px`}>
        <VStack>
          <Image src={user.imageUrl} {...imageProps} />
          <UserName user={user} />
        </VStack>
      </CardBody>
    </NormalCard>
  );
};
