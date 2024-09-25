import '@mantine/core/styles.css';

import {Flex, MantineProvider} from '@mantine/core';
import { theme } from './theme';
import {Welcome} from "@/components/text/Welcome/Welcome";
import {NewGameButton} from "@/components/buttons/NewGameButton";
import {CategorySelector} from "@/components/selectors/CategorySelector";
import {DifficultySelector} from "@/components/selectors/DifficultySelector";
import {QuestionType} from "@/components/checkboxes/QuestionType";

export default function App() {
  return (
    <MantineProvider theme={theme}>
        <Flex
            mih={50}
            gap="xl"
            justify="flex-start"
            align="center"
            direction="column"
            wrap="wrap"
        >
            <Welcome/>
            <CategorySelector/>
            <DifficultySelector/>
            <QuestionType/>
            <NewGameButton/>
        </Flex>
    </MantineProvider>
  );
}
