import {MultiSelect} from "@mantine/core";

export function DifficultySelector() {

    return (
        <MultiSelect
            placeholder="Difficulty"
            data={["Easy", "Medium", "Hard"]}
            maxValues={10}
            clearable
        />
    );
}