"use client";

import {HeaderSpacer} from "@/app/header";
import {PrimaryButton} from "@/components/button/PrimaryButton";
import {SecondaryButton} from "@/components/button/SecondaryButton";
import {GroupForm} from "@/components/group/GroupForm";
import {Section} from "@/components/layout/Section";
import {UserList} from "@/components/user/UserList";
import {UserModel} from "@/domain/user";
import {FormControl, FormErrorMessage, HStack} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {useCreate} from "@/api/hooks/group";
import {GroupGetV1_Member} from "@/api/group/group_pb";

const CreateGroup: React.FC = () => {
    const members: UserModel[] = [
        {
            id: "sample id 1",
            name: "三島 智昭",
            imageUrl: "/sample_profile.png",
            tag: "#キャンプ\n#プログラミング",
        },
        {
            id: "sample id 2",
            name: "大河 照之",
            imageUrl: "/sample_profile.png",
            tag: "#キャンプ\n#プログラミング",
        },
    ];

    const inviteButton = (
        <SecondaryButton
            label="お誘いを送る"
            fontSize="20px"
            padding="25px"
            onClick={() => alert("clicked")}
        />
    );

    type FormValues = {
        groupName: string;
        groupDescription: string;
    }

    const {
        handleSubmit,
        register,
        formState: {errors, isSubmitting},
    } = useForm<FormValues>();

    const {mutate} = useCreate({
        onSuccess: (data) => {
            alert(JSON.stringify(data, null, 2))
        },
        onError: (error) => {
            alert(error.message)
        }
    })

    function onSubmit(values: FormValues) {
        alert(values)
        mutate({
            name: values.groupName,
            description: values.groupDescription,
            members: members.map((member) => GroupGetV1_Member.fromJson(
                {
                    userId: member.id
                }
            )),
        })
    }

    return (
        <>
            <HeaderSpacer/>
            <FormControl>
                <Section title="グループを作成する" margin="20px">
                    <GroupForm register={register}/>
                </Section>
                <Section title="メンバー" margin="20px" side={inviteButton}>
                    <UserList users={members}/>
                </Section>
                <FormErrorMessage>
                    {errors.groupName && errors.groupName.message}
                </FormErrorMessage>
            </FormControl>
            <HStack width="100%" justifyContent="center" marginTop="10px">
                <PrimaryButton
                    label="作成する"
                    fontSize="20px"
                    padding="25px 80px"
                    onClick={handleSubmit(onSubmit)}
                    isLoading={isSubmitting}
                />
            </HStack>
        </>
    );
};

export default CreateGroup;
