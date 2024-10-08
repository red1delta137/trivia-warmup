import {Title} from "@mantine/core";
import classes from './Question.module.css';

export function Question() {
    return (
        <>
            <Title className={classes.question} ta="center" mt={100}>
                In what state was the Declaration of Independence signed?
            </Title>
        </>
    );
}