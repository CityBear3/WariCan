import { Input } from "@chakra-ui/react";
import { ComponentProps } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
type Props = {
  placeholder: string;
  name: string;
  options?: RegisterOptions;
} & ComponentProps<typeof Input>;

export const TextField: React.FC<Props> = ({
  placeholder,
  name,
  options,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <Input
      placeholder={placeholder}
      variant="flushed"
      display="block"
      {...register(name, options)}
      {...props}
    ></Input>
  );
};
