import { PrimaryButton } from "@/components/button/PrimaryButton";
import { TextField } from "@/components/input/TextField";
import { Section } from "@/components/layout/Section";
import { VStack } from "@chakra-ui/react";

const sectionProps = {
  width: "85%",
  height: "100%",
};

const textFieldProps = {
  marginTop: "20px",
  width: "100%",
};

const buttonProps = {
  marginTop: "20px",
  width: "200px",
  padding: "15px",
};

const Login: React.FC = () => {
  return (
    <Section title="ログイン" {...sectionProps}>
      <VStack width="80%" margin="auto">
        <TextField
          placeholder="メールアドレスを入力します"
          {...textFieldProps}
        />
        <TextField placeholder="パスワードを入力します" {...textFieldProps} />
        <PrimaryButton label="ログインする" {...buttonProps} />
      </VStack>
    </Section>
  );
};

export default Login;
