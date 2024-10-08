import {Button, Flex, Title} from "@mantine/core";
import classes from "./Question.module.css";
import React from "react";

export function TrueFalseQuestion() {

    return (
        <>
            <Flex className={classes.flex} mih={50} bg="rgba(0, 0, 0, .3)" gap="xl" justify="center" align="center"
                direction="row" wrap="wrap">
                <Button variant="filled" size="xl" radius="md">True</Button>
                <Button variant="filled" size="xl" radius="md">False</Button>
            </Flex>
        </>
    )
}