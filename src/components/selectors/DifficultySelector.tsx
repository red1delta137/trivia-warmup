import {MultiSelect, Select} from "@mantine/core";

export function DifficultySelector() {

    return (
        <Select
            placeholder="Difficulty"
            data={["Easy", "Medium", "Hard"]}
            clearable
        />
    );
}