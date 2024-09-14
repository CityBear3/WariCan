import {
  Box,
  Collapse,
  Heading,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { DownIcon } from "../icon/DownIcon";
import { RightIcon } from "../icon/RightIcon";

type Props = {
  title: string;
  children: ReactNode;
};

const iconButtonProps = {
  bg: "transparent",
  _hover: { bg: "transparent" },
};

type IconProps = {
  onClick: () => void;
};

const OpenIcon: React.FC<IconProps> = ({ onClick }) => (
  <IconButton
    aria-label="toggle section"
    icon={<DownIcon />}
    onClick={onClick}
    {...iconButtonProps}
  />
);

const CloseIcon: React.FC<IconProps> = ({ onClick }) => (
  <IconButton
    aria-label="toggle section"
    icon={<RightIcon />}
    onClick={onClick}
    {...iconButtonProps}
  />
);

export const FoldableSection: React.FC<Props> = ({ children, title }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <HStack spacing="0">
        {isOpen ? (
          <OpenIcon onClick={onToggle} />
        ) : (
          <CloseIcon onClick={onToggle} />
        )}
        <Heading size="lg">{title}</Heading>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        {children}
      </Collapse>
    </Box>
  );
};
