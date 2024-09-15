import { UserModel } from "@/domain/user";
import { Box, HStack } from "@chakra-ui/react";
import React, { ComponentProps } from "react";
import Slider from "react-slick";
import { Profile } from "../user/Profile";
import "./ProfileSlide.css";

type Props = {
  focusId?: string;
  users: UserModel[];
  onProfileChange?: (idx: number) => void;
} & ComponentProps<typeof Box>;

export const ProfileSlide: React.FC<Props> = ({
  focusId,
  users,
  onProfileChange,
  ...props
}) => {
  const initialIndex = users.findIndex((user) => user.id === focusId);
  const displayUsers = users.length < 2 ? [...users, ...users] : users;

  const settings = {
    initialSlide: focusId && initialIndex >= 0 ? initialIndex : 0,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <Box position={"relative"} width={"full"} overflow={"hidden"} {...props}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider
        {...settings}
        afterChange={(idx) => onProfileChange && onProfileChange(idx)}
      >
        {displayUsers.map((user) => (
          <Box key={user.id}>
            <HStack justifyContent="center" key={user.id}>
              <Profile user={user} />
            </HStack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
