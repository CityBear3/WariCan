import {
  Box,
  Collapse,
  Heading,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ComponentProps, ReactNode } from "react";
import { DownIcon } from "../icon/DownIcon";
import { RightIcon } from "../icon/RightIcon";

type Props = {
  title: string;
  children: ReactNode;
  side?: ReactNode;
} & ComponentProps<typeof Box>;

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

export const FoldableSection: React.FC<Props> = ({
  children,
  title,
  side,
  ...props
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box {...props}>
      <HStack spacing="0">
        {isOpen ? (
          <OpenIcon onClick={onToggle} />
        ) : (
          <CloseIcon onClick={onToggle} />
        )}
        <HStack justifyContent="space-between" flex={1}>
          <Heading size="lg">{title}</Heading>
          {side || <div></div>}
        </HStack>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        {children}
      </Collapse>
    </Box>
  );
};
