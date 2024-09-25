import {Checkbox, SimpleGrid} from "@mantine/core";

export function QuestionType() {

    return (
        <SimpleGrid>
            <Checkbox
                defaultChecked
                label="Multiple Choice"
            />
            <Checkbox
                defaultChecked
                label="True/False"
            />
        </SimpleGrid>

    );
}