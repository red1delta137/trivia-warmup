import {Button, Group} from '@mantine/core';
import {useNavigate} from 'react-router-dom';

export function NewGameButton() {

    const navigate = useNavigate();

    const handleClick = () => {
        let data: NewGame = {
            categories: ["Animals"],
            difficulty: "Easy",
            multipleChoice: true,
            trueFalse: false
        }
        fetch('http://localhost:8080/game/new-game', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    };

    return (
        <Group justify="center">
            <Button color="orange" onClick={handleClick}>New Game</Button>
        </Group>
    );


}