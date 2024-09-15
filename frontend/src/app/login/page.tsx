"use client";

import { PrimaryButton } from "@/components/button/PrimaryButton";
import { TextField } from "@/components/input/TextField";
import { Section } from "@/components/layout/Section";
import { VStack } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

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

type FormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const methods = useForm<FormValues>();

  const onSubmit = (values: FormValues) => {
    alert([values.email, values.password]);
  };

  return (
    <FormProvider {...methods}>
      <Section title="ログイン" {...sectionProps}>
        <VStack width="80%" margin="auto">
          <TextField
            placeholder="メールアドレスを入力します"
            name="email"
            type="email"
            {...textFieldProps}
          />
          <TextField
            placeholder="パスワードを入力します"
            name="password"
            type="password"
            {...textFieldProps}
          />
          <PrimaryButton
            label="ログインする"
            onClick={methods.handleSubmit(onSubmit)}
            {...buttonProps}
          />
        </VStack>
      </Section>
    </FormProvider>
  );
};

export default Login;
